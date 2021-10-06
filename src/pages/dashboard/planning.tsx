import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { SocialMediaLinks } from '@Components/social-media-links';
import { IPlanning } from '@core/planning';
import { prepareError } from '@Helpers/prepare-error';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getOptions } from '@Queries/common';
import { createPlanning } from '@Queries/planning';
import { getUser } from '@Queries/user';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { Paragraph, TitleWithArrow } from '@UI/typography';
import { Controller, useForm } from 'react-hook-form';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

const times = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'] as const;

const DonationsPlanning = () => {
  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      transfusionCenterId: '',
      date: new Date().toISOString(),
      time: '8:00',
    },
  });
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate, isSuccess, isError, error } = useTypedMutation('planning', (data: IPlanning) =>
    createPlanning(data),
  );

  const onSubmit = (data: IPlanning) => {
    mutate(data);
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Место сдачи'>
          <Controller
            name='transfusionCenterId'
            control={control}
            render={({ field }) => (
              <Select {...field} size='large' placeholder='Выберите место сдачи'>
                {transfusionCenter?.map((item) => (
                  <Select.Option key={item._id} value={item._id}>
                    {item.text}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </FormItem>
        <FormItem columns={2} label='Дата кровосдачи'>
          <Input {...register('date')} type='date' />
        </FormItem>
        <FormItem columns={2} label='Время кровосдачи'>
          <Controller
            name='time'
            control={control}
            render={({ field }) => (
              <Select {...field} size='large'>
                {times.map((time) => (
                  <Select.Option key={time} value={time}>
                    {time}
                  </Select.Option>
                ))}
              </Select>
            )}
          />
        </FormItem>
        <Paragraph color='textMuted'>
          Планирование донации реализовано для самодисциплины! Центры переливания крови работают в обычном
          режиме, но мы их проинформируем, что вы должны прийти в запланированный день.
        </Paragraph>
        {isSuccess && <Alert>Вы успешно запланировали донацию</Alert>}
        {isError && <Alert>{prepareError(error)}</Alert>}
        <ButtonsRow>
          <Button type='submit' variant='outline-danger' size='lg'>
            Запланировать
          </Button>
          <SocialButtons />
        </ButtonsRow>
      </Form>
    </DashboardGrid>
  );
};

export default DonationsPlanning;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SocialButtons = styled(SocialMediaLinks)`
  margin-bottom: 0;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;
