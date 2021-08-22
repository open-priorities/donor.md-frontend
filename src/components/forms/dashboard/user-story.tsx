import { useForm } from 'react-hook-form';

import { createOrUpdateUserStory, getUserStory } from '../../../queries/stories';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { Alert } from '../../alert';
import { Button, Divider, Form, FormItem, Paragraph, TextArea, Title } from '../../UI';

export const UserStoryForm = () => {
  const { data: story } = useTypedQuery(['user', 'story'], getUserStory);
  const { isSuccess, isError, mutate } = useTypedMutation(['user', 'story'], (story: string) =>
    createOrUpdateUserStory(story),
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      story,
    },
  });

  const onSubmit = ({ story }: { story: string }) => {
    mutate(story);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <Title as='h5' margin='15px'>
        Моя история
      </Title>
      <Paragraph color='textMuted' margin='15px'>
        Напишите историю о том, как и почему вы решились стать донором (что для вас это значит). Это
        поможет многим людям, которые еще не определились, решиться на то, чтобы тоже стать донором.
        Если вы первый раз сдаете кровь напишите, почему вырешились сдать кровь, потом напишите
        еще!)
      </Paragraph>
      <FormItem>
        <TextArea rows={7} name='story' ref={register} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сохранить историю
      </Button>
      {isSuccess && <Alert dismissible>История добавлена</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
