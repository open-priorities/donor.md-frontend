import { IChangePassword } from '@core/settings';
import { prepareError } from '@Helpers/prepare-error';
import { updatePassword } from '@Queries/settings';
import { useTypedMutation } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Divider } from '@UI/other';
import { useForm } from 'react-hook-form';

export const ChangePassword = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
    },
  });

  const { error, isError, isSuccess, mutate } = useTypedMutation('password', (payload: IChangePassword) =>
    updatePassword(payload),
  );

  const onSubmit = (data: IChangePassword) => {
    mutate(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Divider />
      <FormItem columns={2} label='Введите старый пароль'>
        <Input type='text' {...register('newPassword')} />
      </FormItem>
      <FormItem columns={2} label='Введите новый пароль'>
        <Input type='text' {...register('oldPassword')} />
      </FormItem>
      <Button type='submit' variant='outline-danger' size='lg'>
        Сменить пароль
      </Button>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      {isSuccess && <Alert dismissible>Вы успешно сменили пароль</Alert>}
    </Form>
  );
};
