import { IRecipient, IRecipientFrom } from '@core/recipient';
import { emailField, requiredField } from '@Helpers/form-validate';
import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { getOptions } from '@Queries/common';
import { createRecipients } from '@Queries/recipients';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Divider } from '@UI/dilider';
import { Checkbox } from '@UI/form/checkbox';
import { Form, FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Select } from '@UI/form/select';
import { TextArea } from '@UI/form/textarea';
import { StyledLink } from '@UI/links';
import { Paragraph, Title } from '@UI/typography';
import Link from 'next/link';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';

const DonorSearchPage = () => {
  const { data: bloodGroups } = useTypedQuery('blood-groups', () => getOptions('blood-groups'));
  const { data: bloodCenter } = useTypedQuery('blood-center', () => getOptions('blood-center'));
  const { data: transfusionCenter } = useTypedQuery('transfusion-center', () =>
    getOptions('transfusion-center'),
  );
  const { mutate } = useTypedMutation('recipient', (payload: IRecipient) => createRecipients(payload));
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRecipientFrom>();

  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    if (!ref.current) return;
    const payload = new FormData(ref.current) as unknown as IRecipient;
    mutate(payload);
  };

  return (
    <HeaderContentFooter background='/images/pages/welcome.png'>
      <Container>
        <article>
          <Title margin='0 0 40px 0' bold>
            Поиск доноров
          </Title>
          <Paragraph>
            Наш сервис постарается, чтобы Вы не искали доноров среди родственников и в социальных сетях. Наш
            сервис автоматически поможет Вам найти доноров с требуемой группой крови, попросит их прийти в
            Центры переливания крови. Система сама пригласит нужных доноров, Ваша задача заполнить форму ниже.
          </Paragraph>
        </article>
        <Divider />
        <Form ref={ref} onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='ФИО реципиента' columns={2} required error={errors?.recipient?.fullname?.message}>
            <Input {...register('recipient.fullname', requiredField)} />
          </FormItem>
          <FormItem label='Дата рождения' columns={2} required error={errors?.recipient?.dateBirth?.message}>
            <Input type='date' {...register('recipient.dateBirth', requiredField)} />
          </FormItem>
          <FormItem
            label='Выберите необходимую группу крови'
            columns={2}
            required
            error={errors?.recipient?.bloodGroupId?.message}
          >
            <Controller
              name='recipient.bloodGroupId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {bloodGroups?.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label='Медицинское учреждение'
            help='В котором находится реципиент'
            columns={2}
            required
            error={errors?.recipient?.bloodCenterId?.message}
          >
            <Controller
              name='recipient.bloodCenterId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
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
            label='Заболевание/травма'
            help='Причина поиска крови'
            columns={2}
            required
            error={errors?.recipient?.disease?.message}
          >
            <Input {...register('recipient.disease', requiredField)} />
          </FormItem>
          <FormItem
            label='Укажите центр переливания крови'
            columns={2}
            required
            error={errors?.recipient?.transfusionCenterId?.message}
          >
            <Controller
              name='recipient.transfusionCenterId'
              control={control}
              rules={requiredField}
              render={({ field }) => (
                <Select size='large' {...field}>
                  {transfusionCenter?.map(({ _id, text }) => (
                    <Select.Option key={_id} value={_id}>
                      {text}
                    </Select.Option>
                  ))}
                </Select>
              )}
            />
          </FormItem>
          <FormItem
            label='Необходимое количество доноров'
            columns={2}
            required
            error={errors?.recipient?.numberDonors?.message}
          >
            <Input {...register('recipient.numberDonors', requiredField)} type='number' min={1} max={20} />
          </FormItem>
          <FormItem label='Срок сдачи до' columns={2} required error={errors?.recipient?.deadline?.message}>
            <Input type='date' {...register('recipient.deadline', requiredField)} />
          </FormItem>
          <FormItem
            label='Дополнительная информация'
            columns={2}
            required
            error={errors?.recipient?.info?.message}
          >
            <TextArea
              {...register('recipient.info', requiredField)}
              rows={4}
              placeholder='Представьте полную информацию,
              чтобы мы могли Вам максимально эффективно помочь'
            />
          </FormItem>
          <FormItem
            label='Фото рецепиента'
            help={`
            Фотография донора не обязательна, 
            но повышает внимание доноров
          `}
            columns={2}
            error={errors?.recipient?.file?.message}
          >
            <Input type='file' {...register('recipient.file')} />
          </FormItem>
          <Divider />
          <Title as='h3' margin='30px 0' bold>
            Контактное лицо
          </Title>
          <FormItem label='ФИО' columns={2} required error={errors?.contactPerson?.fullname?.message}>
            <Input {...register('contactPerson.fullname', requiredField)} />
          </FormItem>
          <FormItem
            label='Ваш email-адрес'
            columns={2}
            required
            error={errors?.contactPerson?.email?.message}
          >
            <Input {...register('contactPerson.email', { ...requiredField, ...emailField })} />
          </FormItem>
          <FormItem
            label='Номер мобильного телефона'
            columns={2}
            required
            error={errors?.contactPerson?.phone?.message}
          >
            <Input {...register('contactPerson.phone', requiredField)} />
          </FormItem>
          <FormItem
            label='Кто Вы для реципиента '
            columns={2}
            required
            error={errors?.contactPerson?.whoAreYou?.message}
          >
            <Input {...register('contactPerson.whoAreYou', requiredField)} />
          </FormItem>
          <FormItem required error={errors?.rule?.message}>
            <Checkbox {...register('rule', requiredField)}>
              Согласен с&nbsp;
              <Link href='/user-agreement'>
                <StyledLink underline bold>
                  правилами
                </StyledLink>
              </Link>
              &nbsp; пользования Web-сервиса и обработки персональных данных
            </Checkbox>
          </FormItem>
          <Button type='submit' variant='outline-danger' size='lg'>
            Отправить
          </Button>
        </Form>
        <Alert>
          После обработки Вашего запроса и согласования с Центром переливания крови система автоматически
          отправит уведомления донорам, подходящим по параметрам.
        </Alert>
      </Container>
    </HeaderContentFooter>
  );
};

export default DonorSearchPage;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
