import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

import { ChangePassword } from '../../components/forms/dashboard/settings/change-password';
import { Alert } from '../../components/UI/alert';
import { Button } from '../../components/UI/button';
import { Checkbox } from '../../components/UI/form/checkbox';
import { Form } from '../../components/UI/form/form-item';
import { Paragraph, Title, TitleWithArrow } from '../../components/UI/typography';
import { ISettings } from '../../core/interfaces/settings';
import { DashboardGrid } from '../../core/layouts/dashboard-grid';
import { getSettings, updateSettings } from '../../queries/settings';
import { useTypedMutation, useTypedQuery } from '../../queries/utils';

const Settings = () => {
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

  const onSubmitSettings = (data: ISettings) => {
    mutate(data);
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Настройка</TitleWithArrow>
      <Article>
        <Title as='h5' margin='10px' bold>
          Настройка донорского кабинета
        </Title>
        <Paragraph>
          В этом разделе вы сможете настроить работу донорского кабинета и настройки системы уведомлений
        </Paragraph>
      </Article>
      <Form onSubmit={handleSubmit(onSubmitSettings)}>
        <CheckboxGroup>
          <Checkbox name='isPublic' ref={register}>
            Сделать мой профиль публичным
          </Checkbox>
          <Checkbox name='notDonor' ref={register}>
            Я не могу быть донором
          </Checkbox>
          <Checkbox name='temporaryRestrictions' ref={register}>
            Временные ограничения на сдачу крови
          </Checkbox>
        </CheckboxGroup>
        <Title as='h5' margin='10px' bold>
          Настройка уведомлений
        </Title>
        <CheckboxGroup>
          <Checkbox name='notifications.email' ref={register}>
            Получать уведомления на email-адрес
          </Checkbox>
          <Checkbox name='notifications.sms' ref={register}>
            Получать SMS-сообщения
          </Checkbox>
          <Checkbox name='notifications.telegram' ref={register}>
            Получать сообщения в Telegram
          </Checkbox>
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
};

export default Settings;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('settings', getSettings);
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
