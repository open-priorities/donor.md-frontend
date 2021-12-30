import { requiredField } from '@Helpers/form-validate';
import { createOrUpdateUserStory, getUserStory } from '@Queries/stories';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Divider } from '@UI/dilider';
import { Form, FormItem } from '@UI/form/form-item';
import { TextArea } from '@UI/form/textarea';
import { Paragraph, Title } from '@UI/typography';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const UserStoryForm = () => {
  const { data } = useTypedQuery(['user', 'story'], getUserStory);
  const { isSuccess, isError, mutate } = useTypedMutation(['user', 'story'], (story: string) =>
    createOrUpdateUserStory(story),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      story: '',
    },
  });

  useEffect(() => {
    if (data?.story) {
      setValue('story', data.story);
    }
  }, [data?.story, setValue]);

  const onSubmit = ({ story }: { story: string }) => {
    mutate(story);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <Title as='h5' margin='0 0 15px 0'>
        Моя история
      </Title>
      <Paragraph color='textMuted' margin='0 0 15px 0'>
        Напишите историю о том, как и почему вы решились стать донором (что для вас это значит). Это поможет
        многим людям, которые еще не определились, решиться на то, чтобы тоже стать донором. Если вы первый
        раз сдаете кровь напишите, почему вырешились сдать кровь, потом напишите еще!)
      </Paragraph>
      <FormItem error={errors?.story?.message}>
        <TextArea rows={7} {...register('story', requiredField)} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сохранить историю
      </Button>
      {isSuccess && <Alert dismissible>История добавлена</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
