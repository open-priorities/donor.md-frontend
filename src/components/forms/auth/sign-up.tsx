import { IUser } from '@core/user';
import { prepareError } from '@Helpers/prepare-error';
import { getOptions } from '@Queries/common';
import { createUser } from '@Queries/user';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { userAtom } from '@Store/atoms/user-atom';
import { Alert } from '@UI/alert';
import { Checkbox } from '@UI/form/checkbox';
import { FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { StyledLink } from '@UI/links';
import { Loading } from '@UI/loading';
import { Title } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ActionLayout } from './utils';

const validate = { required: 'Обязательное поле' };

export const SignUpForm = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const { push } = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...user, password: '', bloodGroupId: '', sexId: '' },
  });

  const { data: bloodGroups, isLoading: bloodGroupsLoading } = useTypedQuery('blood-groups', () =>
    getOptions('blood-groups'),
  );
  const { data: sex, isLoading: sexLoading } = useTypedQuery('sex', () => getOptions('sex'));
  const {
    mutate,
    isError,
    isSuccess,
    error,
    data: userData,
  } = useTypedMutation('user', (payload: IUser) => createUser(payload));

  useEffect(() => {
    if (!userData) return;
    setUser(userData);
  }, [setUser, userData]);

  const onSubmit = (payload: IUser) => {
    mutate(payload);
  };

  if (bloodGroupsLoading || sexLoading) return <Loading />;

  const blood = bloodGroups || [];
  blood.shift();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='0 0 15px 0'>
        Регистрация
      </Title>
      <FormItem error={errors.fullname?.message}>
        <Input placeholder='Укажите ФИО' {...register('fullname', validate)} />
      </FormItem>
      <FormItem error={errors.sexId?.message}>
        <Controller
          name='sexId'
          control={control}
          render={({ field }) => (
            <Select {...field} size='large' placeholder='Укажите пол'>
              {sex?.map(({ text, _id }) => (
                <Select.Option key={_id} value={_id}>
                  {text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <FormItem error={errors.bloodGroupId?.message}>
        <Controller
          name='bloodGroupId'
          control={control}
          render={({ field }) => (
            <Select {...field} size='large' placeholder='Укажите группу крови'>
              {blood &&
                blood.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          )}
        />
      </FormItem>
      <FormItem error={errors.phoneMobile?.message}>
        <Input placeholder='Укажите номер телефона' {...register('phoneMobile', validate)} />
      </FormItem>
      <FormItem error={errors.email?.message}>
        <Input
          placeholder='Укажите email'
          type='email'
          autoComplete='email'
          {...register('email', validate)}
        />
      </FormItem>
      <FormItem error={errors.password?.message}>
        <Input
          type='password'
          autoComplete='new-password'
          placeholder='Укажите пароль'
          {...register('password', validate)}
        />
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox readOnly defaultChecked />
          <p>
            Я принимаю условия Пользовательского соглашения пользования Web-сервисом donor.md и даю своё
            согласие&nbsp;
            <Link href='/'>
              <StyledLink color='textMuted' underline>
                Donor.md
              </StyledLink>
            </Link>
            &nbsp; на обработку моей персональной информации на условиях, определенных&nbsp;
            <Link href='/privacy-policy'>
              <StyledLink color='textMuted' underline>
                Политикой конфиденциальности.
              </StyledLink>
            </Link>
          </p>
        </FormItemCheckbox>
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox readOnly defaultChecked />
          <p>
            Даю согласие на обработку персональных данных (согласно Закону Приднестровья «О персональных
            данных»)
          </p>
        </FormItemCheckbox>
      </FormItem>
      <div>
        <ActionLayout btnText='Зарегистрироваться' linkText='Войти' linkOnClick={() => push('auth')} />
      </div>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      {isSuccess && <Alert dismissible>Вы успешно зарегистрировались</Alert>}
    </form>
  );
};

const FormItemCheckbox = styled.div`
  color: ${({ theme }) => theme.colors.textMuted}
  font-size: 0.85rem;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 15px;
`;
