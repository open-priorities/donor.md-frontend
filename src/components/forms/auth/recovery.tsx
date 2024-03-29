import { useForm } from 'react-hook-form';

import { prepareError } from '../../../core/helpers/prepare-data';
import { recoveryUser } from '../../../queries/user';
import { useTypedMutation } from '../../../queries/utils';
import { Alert } from '../../UI/alert';
import { FormItem } from '../../UI/form/form-item';
import { Input } from '../../UI/form/input';
import { Title } from '../../UI/typography';
import { onChangeState } from './types';
import { ActionLayout } from './utils';

declare type Props = { onChangeState: onChangeState };

export const RecoveryForm = ({ onChangeState }: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const { mutate, error, isError, isSuccess } = useTypedMutation('recovery', (payload: { email: string }) =>
    recoveryUser(payload),
  );

  const onSubmit = (data: { email: string }) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title as='h2' margin='15px'>
        Восстановление доступа
      </Title>
      <FormItem columns={1}>
        <Input placeholder='Введите email' {...register('email')} />
      </FormItem>
      <div>
        <ActionLayout btnText='Восстановить' linkText='Войти' linkOnClick={() => onChangeState('signIn')} />
      </div>
      {isSuccess && <Alert dismissible>Запрос успешно обработан</Alert>}
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
    </form>
  );
};
