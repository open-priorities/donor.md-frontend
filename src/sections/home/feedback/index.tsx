import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { SocialMediaLinks } from '../../../components/social-media-links';
import { Alert } from '../../../components/UI/alert';
import { Button } from '../../../components/UI/button';
import { FormItem } from '../../../components/UI/form/form-item';
import { Input } from '../../../components/UI/form/input';
import { TextArea } from '../../../components/UI/form/textarea';
import { Loading } from '../../../components/UI/loading';
import { Title } from '../../../components/UI/typography';
import { prepareError } from '../../../core/helpers/prepare-data';
import { createFeedback, IFeedback } from '../../../queries/feedback';
import { useTypedMutation } from '../../../queries/utils';
import { Section } from '../utils';
import { Grid, ImageWrapper, SectionParagraph, Social } from './styles';

export const Feedback = () => {
  const { handleSubmit, register, reset } = useForm();
  const { mutate, isError, isLoading, isSuccess, error } = useTypedMutation(
    'feedback',
    (payload: IFeedback) => createFeedback(payload),
  );

  const onSubmit = (data: IFeedback) => {
    mutate(data);
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSuccess && <Alert dismissible message='Спасибо что написали нам' />}
            {isError && <Alert dismissible message={prepareError(error)} />}
            {isLoading && <Loading />}
            <FormItem columns={1}>
              <HalfWidth>
                <Input {...register('contact')} scale='lg' placeholder='Ваш email или номер телефона' />
              </HalfWidth>
            </FormItem>
            <FormItem columns={1}>
              <TextArea {...register('message')} placeholder='Текст сообщения' rows={7} />
            </FormItem>
            <Button type='submit' variant='outline-danger' size='lg'>
              Отправить
            </Button>
          </form>
          <Social>
            <Image src='/images/pages/home/we-are-in-social.png' width={364} height={33} layout='fixed' />
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
