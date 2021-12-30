import { SocialMediaLinks } from '@Components/social-media-links';
import { emailField, requiredField } from '@Helpers/form-validate';
import { prepareError } from '@Helpers/prepare-error';
import { createFeedback, IFeedback } from '@Queries/feedback';
import { useTypedMutation } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { TextArea } from '@UI/form/textarea';
import { Loading } from '@UI/loading';
import { Title } from '@UI/typography';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Section } from '../utils';
import { Grid, ImageWrapper, SectionParagraph, Social } from './styles';

export const Feedback = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contact: '',
      message: '',
    },
  });
  const { mutate, isError, isLoading, isSuccess, error } = useTypedMutation(
    'feedback',
    (payload: IFeedback) => createFeedback(payload),
  );

  const onSubmit = (data: IFeedback) => {
    mutate(data);
  };

  return (
    <Section id='feedback' marginBottom='40px'>
      <Grid>
        <div>
          <Title as='h2' bold>
            Напишите нам
          </Title>
          <SectionParagraph>
            Если у Вас есть вопросы по работе сервиса и предложения по его улучшению и/или видение нашего
            общего сотрудничества
          </SectionParagraph>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormItem columns={1} required error={errors?.contact?.message}>
              <HalfWidth>
                <Input
                  {...register('contact', { ...requiredField, ...emailField })}
                  scale='lg'
                  placeholder='Ваш email или номер телефона'
                />
              </HalfWidth>
            </FormItem>
            <FormItem columns={1} required error={errors?.message?.message}>
              <TextArea {...register('message', requiredField)} placeholder='Текст сообщения' rows={7} />
            </FormItem>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
            {isSuccess && <Alert dismissible>Спасибо, что написали нам. Ваш запрос на рассмотрении</Alert>}
            {isError && <Alert dismissible message={prepareError(error)} />}
            {isLoading && <Loading />}
          </Form>
          <Social>
            <Image src='/images/pages/home/we-are-in-social.svg' width={388} height={60} layout='fixed' />
            <SocialMediaLinks />
          </Social>
        </div>
        <ImageWrapper>
          <Image src='/images/feedback.svg' width={300} height={300} layout='responsive' />
        </ImageWrapper>
      </Grid>
    </Section>
  );
};

const HalfWidth = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.media.md}) {
    width: 50%;
  }
`;
