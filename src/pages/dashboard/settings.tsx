import { ChangePassword } from '@Components/forms/dashboard/settings/change-password';
import { ISettings } from '@core/settings';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getSettings, updateSettings } from '@Queries/settings';
import { getUser } from '@Queries/user';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Checkbox } from '@UI/form/checkbox';
import { Form } from '@UI/form/form-item';
import { Paragraph, Title, TitleWithArrow } from '@UI/typography';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

function Settings() {
  const { handleSubmit, setValue, register } = useForm();
  const { mutate, isSuccess, isError } = useTypedMutation('settings', (data: ISettings) =>
    updateSettings(data),
  );
  const { data } = useTypedQuery('settings', getSettings);

  useEffect(() => {
    if (!data) return;
    const recoveryData = Object.entries(data);
    recoveryData.forEach(([key, val]) => setValue(key, val));
  }, [data, setValue]);

  const onSubmitSettings = (data: any) => {
    mutate(data);
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Настройка</TitleWithArrow>
      <Article>
        <Title as='h5' margin='0 0 10px 0' bold>
          Настройка донорского кабинета
        </Title>
        <Paragraph>
          В этом разделе вы сможете настроить работу донорского кабинета и настройки системы уведомлений
        </Paragraph>
      </Article>
      <Form onSubmit={handleSubmit(onSubmitSettings)}>
        <CheckboxGroup>
          <Checkbox {...register('isPublic')}>Сделать мой профиль публичным</Checkbox>
          <Checkbox {...register('notDonor')}>Я не могу быть донором</Checkbox>
          <Checkbox {...register('temporaryRestrictions')}>Временные ограничения на сдачу крови</Checkbox>
        </CheckboxGroup>
        <Title as='h5' margin='0 0 10px 0' bold>
          Настройка уведомлений
        </Title>
        <CheckboxGroup>
          <Checkbox {...register('notifications.email')}>Получать уведомления на email-адрес</Checkbox>
          <Checkbox {...register('notifications.sms')}>Получать SMS-сообщения</Checkbox>
          <Checkbox {...register('notifications.telegram')}>Получать сообщения в Telegram</Checkbox>
        </CheckboxGroup>
        <Button type='submit' variant='outline-danger' size='lg'>
          Сохранить
        </Button>
        {isError && <Alert dismissible>adasd</Alert>}
        {isSuccess && successMessage}
      </Form>
      <ChangePassword />
    </DashboardGrid>
  );
}

export default Settings;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('settings', getSettings);
  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const successMessage = (
  <Alert dismissible>
    Изменения в настройках сохранены <b>успешно!</b>
  </Alert>
);

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;

  & label {
    margin-left: 0 !important;
    margin-bottom: 15px;
  }
`;

const Article = styled.article`
  margin-top: 50px;
`;
