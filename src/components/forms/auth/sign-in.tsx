import { emailField, requiredField } from '@Helpers/form-validate';
import { prepareError } from '@Helpers/prepare-error';
import { signIn, signInType } from '@Queries/user';
import { useTypedMutation } from '@Queries/utils';
import { userAtom } from '@Store/atoms/user-atom';
import { Alert } from '@UI/alert';
import { FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Title } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import { onChangeState } from './types';
import { ActionLayout, WrappedLink } from './utils';

export const SignInForm = ({ onChangeState }: { onChangeState: onChangeState }) => {
  const setUser = useSetRecoilState(userAtom);
  const resetUser = useResetRecoilState(userAtom);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { push } = useRouter();

  const {
    mutate,
    isError,
    error,
    data: user,
  } = useTypedMutation('user', (payload: signInType) => signIn(payload));

  useEffect(() => {
    if (!user) {
      return resetUser();
    }

    push('dashboard/details');
    setUser(user);
  }, [push, resetUser, setUser, user]);

  const onSubmit = (payload: signInType) => {
    mutate(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='0 0 15px 0'>
        Авторизация
      </Title>
      <FormItem columns={1} error={errors?.email?.message}>
        <Input
          placeholder='Введите email'
          autoComplete='username'
          {...register('email', {
            ...requiredField,
            ...emailField,
          })}
        />
      </FormItem>
      <FormItem columns={1} error={errors?.password?.message}>
        <Input
          placeholder='Введите пароль'
          type='password'
          autoComplete='current-password'
          {...register('password', {
            ...requiredField,
            minLength: {
              value: 8,
              message: 'Пароль должен быть больше 8 символов',
            },
          })}
        />
      </FormItem>
      <div>
        <ActionLayout btnText='Войти' linkText='Регистрация' linkOnClick={() => onChangeState('signUp')} />
        <WrappedLink onClick={() => onChangeState('recovery')} color='red' underline>
          Забыли пароль?
        </WrappedLink>
      </div>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
    </form>
  );
};
