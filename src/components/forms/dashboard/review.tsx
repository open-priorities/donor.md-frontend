import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IReview } from '../../../core/interfaces/review';
import { getOptions } from '../../../queries/common';
import { createReview } from '../../../queries/review';
import { useTypedMutation, useTypedQuery } from '../../../queries/utils';
import { Alert } from '../../UI/alert';
import { Button } from '../../UI/button';
import { Form, FormItem } from '../../UI/form/form-item';
import { Select } from '../../UI/form/select';
import { TextArea } from '../../UI/form/textarea';
import { Divider } from '../../UI/other';
import { Slider } from '../../UI/slider';
import { Title } from '../../UI/typography';

const marks = {
  0: '0',
  20: '1',
  40: '2',
  60: '3',
  80: '4',
  100: '5',
};

const formatter = (value?: number) => value && `${((5 / 100) * value).toFixed(1)}`;

export const ReviewForm = () => {
  const { control, handleSubmit, register } = useForm();

  const { data: bloodCenter, isLoading: bloodCenterLoading } = useTypedQuery('blood-center', () =>
    getOptions('blood-center'),
  );

  const {
    mutate,
    isSuccess: isSuccessReview,
    isError: isErrorReview,
  } = useTypedMutation('review', (review: IReview) => createReview(review));

  const onSubmit = (data: IReview) => {
    const preparedData = Object.entries(data).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: typeof value === 'number' ? Math.round(value / 25) : value,
      };
    }, {} as IReview);

    mutate(preparedData);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormItem label='Выбрать Центр крови' columns={2}>
        <Controller
          name='bloodCenterId'
          control={control}
          render={({ field }) => (
            <Select {...field} size='large' placeholder='Выбор центра' loading={bloodCenterLoading}>
              {bloodCenter?.map((item) => (
                <Select.Option key={item._id} value={item._id}>
                  {item.text}
                </Select.Option>
              ))}
            </Select>
          )}
        />
      </FormItem>
      <FormItem label='Отношение персонала' marginBottom='10px' columns={2}>
        <Controller
          defaultValue={100}
          name='staffAttitude'
          control={control}
          render={(props) => (
            <Slider {...props} marks={marks} step={10} defaultValue={100} tipFormatter={formatter} />
          )}
        />
      </FormItem>
      <FormItem label='Комфортность при донации' marginBottom='10px' columns={2}>
        <Controller
          defaultValue={100}
          name='comfortableDonation'
          control={control}
          render={(props) => (
            <Slider {...props} marks={marks} step={10} defaultValue={100} tipFormatter={formatter} />
          )}
        />
      </FormItem>
      <FormItem label='Время ожидания услуги' marginBottom='10px' columns={2}>
        <Controller
          defaultValue={100}
          name='waitingTime'
          control={control}
          render={(props) => (
            <Slider {...props} marks={marks} step={10} defaultValue={100} tipFormatter={formatter} />
          )}
        />
      </FormItem>
      <Divider>
        <Title as='h5' bold>
          Форма обратной связи
        </Title>
      </Divider>
      <FormItem columns={1}>
        <TextArea
          placeholder='Нам очень важно знать мнение каждого донора'
          rows={7}
          {...register('message', { required: true })}
        />
      </FormItem>
      <Button variant='outline-danger' size='lg' type='submit'>
        Отправить
      </Button>
      {isErrorReview && <Alert dismissible>Что-то пошло не так</Alert>}
      {isSuccessReview && <Alert dismissible>Спасибо что оставили отзыв</Alert>}
    </FormWrapper>
  );
};

const FormWrapper = styled(Form)`
  margin-top: 30px;
`;
