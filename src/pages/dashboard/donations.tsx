import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { SocialMediaLinks } from '@Components/social-media-links';
import { IDonation } from '@core/donation';
import { requiredField } from '@Helpers/form-validate';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getOptions } from '@Queries/common';
import { addDonation } from '@Queries/donations';
import { getUser } from '@Queries/user';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { TitleWithArrow } from '@UI/typography';
import { Controller, useForm } from 'react-hook-form';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

const Donations = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      referenceNumber: null,
      donationNumber: '',
      date: new Date().toISOString().split('T')[0],
      transfusionCenterId: '',
      recipientId: '',
      referenceImg: '',
    },
  });

  const { data: bloodCenter } = useTypedQuery('blood-center', () => getOptions('blood-center'));
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { data: user } = useTypedQuery('user', getUser);
  const { mutate, isSuccess, isError } = useTypedMutation('donations', (data: IDonation) =>
    addDonation(data),
  );

  const onSubmit = (data: IDonation) => {
    user?.id &&
      mutate({
        ...data,
        userId: user.id,
      });
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Номер справки' error={errors?.referenceNumber?.message} required>
          <Input {...register('referenceNumber', requiredField)} />
        </FormItem>
        <FormItem columns={2} label='Номер донации' error={errors?.donationNumber?.message} required>
          <Input {...register('donationNumber', requiredField)} />
        </FormItem>
        <FormItem columns={2} label='Дата кровосдачи' error={errors?.date?.message} required>
          <Input type='date' {...register('date', requiredField)} />
        </FormItem>
        <FormItem columns={2} label='Место сдачи' error={errors?.transfusionCenterId?.message} required>
          <Controller
            name='transfusionCenterId'
            control={control}
            rules={requiredField}
            render={({ field }) => (
              <Select {...field} size='large' placeholder='Выберите место сдачи'>
                {transfusionCenter?.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </FormItem>
        <FormItem columns={2} label='Ваш реципиент' help='Поле не обязательное'>
          <Controller
            name='recipientId'
            control={control}
            render={({ field }) => (
              <Select {...field} size='large' placeholder='Выберите реципиента'>
                {bloodCenter?.map(({ _id, text }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </FormItem>
        <FormItem
          columns={2}
          label='Загрузить справку'
          help={`
          JPG , PNG объем до 10 Мб.
          Принимаются только фотографии официальных справок установленного образца. 
          После проверки вашей донации, она появится в вашем кабинете.
          `}
          required
        >
          <Input type='file' accept='image/*' {...register('referenceImg', requiredField)} />
        </FormItem>
        <ButtonsRow>
          <Button type='submit' variant='outline-danger' size='lg'>
            Добавить донацию
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
      {isSuccess && (
        <Alert dismissible>
          Спасибо, Ваша донация отправлена на проверку. Если Выправильно заполнилнили форму и прикрепили
          нужную справку,то после проверки ваша донация автоматически добавиться.Для проверки необходимо до
          5-ти рабочих дней.Не забывайте заходить в Ваш личный кабинет.
        </Alert>
      )}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </DashboardGrid>
  );
};

export default Donations;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;
