import { IUser } from '@core/user';
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

  const { register, control, handleSubmit, watch } = useForm({
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
      <FormItem columns={2} label='ФИО' required>
        <Input {...register('fullname')} />
      </FormItem>
      <FormItem columns={2} label='Дата рождения' required>
        <Input type='date' {...register('dateBirth')} />
      </FormItem>
      <FormItem columns={2} label='Группа крови' required>
        <Controller
          name='bloodGroupId'
          control={control}
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
      <FormItem columns={2} label='Пол' required>
        <Controller
          name='sexId'
          control={control}
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
      <FormItem columns={2} label='Город проживания' required>
        <Controller
          name='cityId'
          control={control}
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
      <FormItem columns={2} label='Ваш email-адрес' required>
        <Input {...register('email')} />
      </FormItem>
      <FormItem columns={2} label='Номер мобильного телефона' required>
        <Input {...register('phoneMobile')} />
      </FormItem>
      <FormItem columns={2} label='Номер домашнего телефона' required>
        <Input {...register('phone')} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Обновить информацию
      </Button>
      {isSuccess && <Alert dismissible>Вы успешно обновили информацию</Alert>}
      {isError && <Alert dismissible>Что-то пошло не так</Alert>}
    </Form>
  );
};
