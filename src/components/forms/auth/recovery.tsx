import { prepareError } from '@Helpers/prepare-error';
import { recoveryUser } from '@Queries/user';
import { useTypedMutation } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Title } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';
import { useForm } from 'react-hook-form';

import { ActionLayout } from './utils';

export const RecoveryForm = () => {
  const { push } = useRouter();
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
      <Title as='h2' margin='0 0 15px 0'>
        Восстановление доступа
      </Title>
      <FormItem columns={1}>
        <Input placeholder='Введите email' {...register('email')} />
      </FormItem>
      <div>
        <ActionLayout btnText='Восстановить' linkText='Войти' linkOnClick={() => push('/auth')} />
      </div>
      {isSuccess && <Alert dismissible>Запрос успешно обработан</Alert>}
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
    </form>
  );
};
