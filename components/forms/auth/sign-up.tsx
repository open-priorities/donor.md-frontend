import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { FormItem, Input, Title, Checkbox, StyledLink, Select } from '../../UI';
import { onChangeState } from './types';
import { ActionLayout } from './utils';
import { useAppSelector } from '../../../redux/store';
import { getOptions } from '../../../redux/common';
import { signUpAction } from '../../../redux/redusers/user';
import { IUser } from '../../../interfaces/user';
import Alert from '../../alert';

declare type Props = { onChangeState: onChangeState };

export const SignUpForm: React.FC<Props> = ({ onChangeState }): JSX.Element => {
  const { register, control, handleSubmit } = useForm();
  const { sex, bloodGroups } = useAppSelector((state) => state.common);
  const { status, error } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOptions('sex'));
    dispatch(getOptions('bloodGroups'));
  }, []);

  const onSubmit = (data: IUser) => {
    dispatch(signUpAction(data));
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const blood = [...bloodGroups.data];
  blood.shift();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Регистрация
      </Title>
      <FormItem>
        <Input placeholder='Укажите ФИО' name='fullname' innerRef={register} />
      </FormItem>
      <FormItem>
        <Controller
          as={
            <Select size='large' placeholder='Укажите пол'>
              {sex.data &&
                sex.data.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          }
          name='sexId'
          control={control}
        />
      </FormItem>
      <FormItem>
        <Controller
          name='bloodGroupId'
          control={control}
          as={
            <Select size='large' placeholder='Укажите группу крови'>
              {blood &&
                blood.map(({ text, _id }) => (
                  <Select.Option key={_id} value={_id}>
                    {text}
                  </Select.Option>
                ))}
            </Select>
          }
        />
      </FormItem>
      <FormItem>
        <Input placeholder='Укажите номер телефона' name='phoneMobile' innerRef={register} />
      </FormItem>
      <FormItem>
        <Input placeholder='Укажите email' type='email' name='email' innerRef={register} />
      </FormItem>
      <FormItem>
        <Input type='password' placeholder='Укажите пароль' name='password' innerRef={register} />
      </FormItem>
      <FormItem>
        <FormItemCheckbox>
          <Checkbox checked />
          <p>
            Я принимаю условия Пользовательского соглашения и даю своё согласие{' '}
            <Link href='/'>
              <StyledLink color='textMuted' underline>
                Donor.md
              </StyledLink>
            </Link>{' '}
            на обработку моей персональной информации на условиях, определенных{' '}
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
          <Checkbox checked />
          <p>
            Даю согласие на обработку персональных данных (согласно Закону Приднестровья «О
            персональных данных»
          </p>
        </FormItemCheckbox>
      </FormItem>
      <div>
        <ActionLayout
          btnText='Зарегистрироваться'
          linkText='Войти'
          linkOnClick={() => onChangeState('signIn')}
        />
      </div>
      {status === 'error' && <Alert>{error}</Alert>}
      {status === 'success' && <Alert>Вы успешно зарегистрировались</Alert>}
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
