import { IUser } from '@core/user';
import { emailField, requiredField } from '@Helpers/form-validate';
import { getOptions } from '@Queries/common';
import { updateUser } from '@Queries/user';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { userAtom } from '@Store/atoms/user-atom';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Divider } from '@UI/dilider';
import { Checkbox } from '@UI/form/checkbox';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { Title } from '@UI/typography';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

export const DetailsForm = () => {
  const user = useRecoilValue(userAtom);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user,
      corporateDonations: !!user?.corporateId,
      dateBirth: user?.dateBirth ? new Date(user.dateBirth).toISOString().split('T')[0] : user?.dateBirth,
    },
  });
  const { data: sex } = useTypedQuery('sex', () => getOptions('sex'));
  const { data: bloodGroups } = useTypedQuery('blood-groups', () => getOptions('blood-groups'));
  const { data: cities } = useTypedQuery('cities', () => getOptions('cities'));
  const { data: organizations } = useTypedQuery('organizations', () => getOptions('organizations'));
  const { mutate, isSuccess, isError } = useTypedMutation('user', updateUser);

  const isCorporateDonation = watch('corporateDonations');

  const onSubmit = (data: IUser) => {
    mutate(data);
  };

  if (!sex || !bloodGroups || !cities || !organizations || !user) return null;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormItem columns={2} label='ФИО' error={errors?.fullname?.message} required>
        <Input {...register('fullname', requiredField)} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' error={errors?.dateBirth?.message} required>
        <Input type='date' {...register('dateBirth', requiredField)} />
      </FormItem>
      <FormItem columns={2} label='Группа крови' error={errors?.bloodGroupId?.message} required>
        <Controller
          name='bloodGroupId'
          control={control}
          rules={requiredField}
          render={() => (
            <Select size='large' placeholder='Ваша группа крови'>
              {bloodGroups.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <FormItem columns={2} label='Пол' error={errors?.sexId?.message} required>
        <Controller
          name='sexId'
          control={control}
          rules={requiredField}
          render={({ field }) => (
            <Select {...field} size='large' placeholder='Город проживания'>
              {sex.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <FormItem columns={2} label='Город проживания' error={errors?.cityId?.message} required>
        <Controller
          name='cityId'
          control={control}
          rules={requiredField}
          render={({ field }) => (
            <Select {...field} size='large' placeholder='Город проживания'>
              {cities.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='0 0 30px 0' bold>
        Корпоративное донорство
      </Title>
      <FormItem columns={2}>
        <Checkbox {...register('corporateDonations')}>Я участник программы корпоративное донорство</Checkbox>
      </FormItem>
      <FormItem columns={2} label='Выберите вашу организацию'>
        <Controller
          name='corporateId'
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size='large'
              placeholder='Выберите вашу организацию'
              disabled={!isCorporateDonation}
            >
              {organizations.map(({ _id, text }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <Divider />
      <Title as='h4' margin='0 0 30px 0' bold>
        Ваши контакты
      </Title>
      <FormItem columns={2} label='Ваш email-адрес' error={errors?.email?.message} required>
        <Input {...register('email', { ...requiredField, ...emailField })} />
      </FormItem>
      <FormItem columns={2} label='Номер мобильного телефона' error={errors?.phoneMobile?.message} required>
        <Input {...register('phoneMobile', requiredField)} />
      </FormItem>
      <FormItem columns={2} label='Номер домашнего телефона' error={errors?.phone?.message} required>
        <Input {...register('phone', requiredField)} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Обновить информацию
      </Button>
      {isSuccess && <Alert dismissible>Вы успешно обновили информацию</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
