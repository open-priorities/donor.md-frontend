import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { SocialMediaLinks } from '@Components/social-media-links';
import { IPlanning } from '@core/planning';
import { requiredField } from '@Helpers/form-validate';
import { prepareError } from '@Helpers/prepare-error';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getOptions } from '@Queries/common';
import { createPlanning } from '@Queries/planning';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { Paragraph, TitleWithArrow } from '@UI/typography';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

const times = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00'] as const;

function DonationsPlanning() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      transfusionCenterId: '',
      date: new Date().toISOString().split('T')[0],
      time: '8:00',
    },
  });
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate, isSuccess, isError, error } = useTypedMutation('planning', (data: IPlanning) =>
    createPlanning(data),
  );

  const onSubmit = (data: any) => mutate(data);

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Место сдачи' required error={errors?.transfusionCenterId?.message}>
          <Controller
            name='transfusionCenterId'
            control={control}
            rules={requiredField}
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
        <FormItem columns={2} label='Дата кровосдачи' required error={errors?.date?.message}>
          <Input {...register('date', requiredField)} type='date' />
        </FormItem>
        <FormItem columns={2} label='Время кровосдачи' required error={errors?.time?.message}>
          <Controller
            name='time'
            control={control}
            rules={requiredField}
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
}

export default DonationsPlanning;

export const getServerSideProps = async () => {
  return {
    props: {},
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
