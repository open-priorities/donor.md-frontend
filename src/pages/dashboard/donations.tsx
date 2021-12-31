import { DashboardButtonsLinks } from '@Components/dashboard-buttons-links';
import { SocialMediaLinks } from '@Components/social-media-links';
import { IDonation } from '@core/donation';
import { requiredField } from '@Helpers/form-validate';
import { DashboardGrid } from '@Layouts/dashboard-grid';
import { getOptions } from '@Queries/common';
import { addDonation } from '@Queries/donations';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { FileInput } from '@UI/form/file-input';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { TitleWithArrow } from '@UI/typography';
import { Controller, useForm } from 'react-hook-form';
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
      image: null,
    },
  });

  const { data: bloodCenter } = useTypedQuery('blood-center', () => getOptions('blood-center'));
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate, isSuccess, isError } = useTypedMutation('donations', (data: FormData) => addDonation(data));

  const onSubmit = (data: IDonation) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'image') {
        formData.append('image', data.image[0]);
      } else {
        formData.append(key, value);
      }
    });

    mutate(formData);
  };

  return (
    <DashboardGrid>
      <TitleWithArrow>Мои донации</TitleWithArrow>
      <DashboardButtonsLinks />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem columns={2} label='Номер справки' error={errors?.referenceNumber?.message} required>
          <Input type='number' {...register('referenceNumber', requiredField)} />
        </FormItem>
        <FormItem columns={2} label='Номер донации' error={errors?.donationNumber?.message} required>
          <Input type='number' {...register('donationNumber', requiredField)} />
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
          Принимаются только фотографии официальных справок установленного образца. 
          После проверки вашей донации, она появится в вашем кабинете.
          `}
          error={errors?.image?.message}
          required
        >
          <FileInput accept='image/*' {...register('image', requiredField)} />
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
  return {
    props: {},
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
