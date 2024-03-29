import { IMonitoringResponse } from '@core/monitoring';
import { formatDate } from '@Helpers/converters';
import { prepareError } from '@Helpers/prepare-error';
import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { getMonitoringData, updateMonitoringData } from '@Queries/monitoring';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Divider } from '@UI/dilider';
import { FormItem } from '@UI/form/form-item';
import { Input } from '@UI/form/input';
import { Paragraph, Title } from '@UI/typography';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function Monitoring() {
  const { register, handleSubmit, setValue } = useForm();

  const { data: monitoringData } = useTypedQuery('monitoring', getMonitoringData);
  const { mutate, isError, isSuccess, error } = useTypedMutation(
    'monitoring',
    (payload: IMonitoringResponse) => updateMonitoringData(payload),
  );

  const currentDate = formatDate(new Date());

  useEffect(() => {
    monitoringData?.values?.forEach((item) => {
      setValue(item.group, item.quantity);
    });
  }, [monitoringData, setValue]);

  const onSubmit = (formData: any) => {
    if (!monitoringData) return;

    const prepareData = {
      _id: monitoringData._id,
      fullname: formData.fullname,
      values: formData,
    };

    mutate(prepareData);
  };

  return (
    <HeaderContentFooter background='/images/pages/love-pic.png'>
      <Container>
        <Article>
          <Title margin='0 0 40px 0' bold>
            Для сотрудников центра крови
          </Title>
          <Paragraph>
            Заполните пожалуйста форму для отображение мониторинга запасов крови. Ввод данных по
            эритроцитарной массе
          </Paragraph>
        </Article>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem label='Ваша Фамилия и Имя' columns={2}>
            <Input {...register('fullname')} />
          </FormItem>
          <FormItem help='Дата указывается автоматически' label='Дата ввода информации' columns={2}>
            <Input placeholder='Дата указывается автоматически' disabled value={currentDate} />
          </FormItem>
          <StyledDivider />
          <Paragraph align='left'>
            Ввод данных для монитора крови из остатков запаса по дозам эритроцитарной массы.
          </Paragraph>
          <TableForm>
            <Row>
              <Title as='h5' bold align='center'>
                O(I)
              </Title>
              <Title as='h5' bold align='center'>
                A(II)
              </Title>
              <Title as='h5' bold align='center'>
                В(III)
              </Title>
              <Title as='h5' bold align='center'>
                AB(IV)
              </Title>
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Положительная (+)
              </Paragraph>
              <Input type='number' {...register('O(I)+')} />
              <Input type='number' {...register('A(II)+')} />
              <Input type='number' {...register('B(III)+')} />
              <Input type='number' {...register('AB(IV)+')} />
            </Row>
            <Row>
              <Paragraph bold align='left'>
                Отрицательная (-)
              </Paragraph>
              <Input type='number' {...register('O(I)-')} />
              <Input type='number' {...register('A(II)-')} />
              <Input type='number' {...register('B(III)-')} />
              <Input type='number' {...register('AB(IV)-')} />
            </Row>
          </TableForm>
          <Button type='submit' variant='outline-danger' size='lg'>
            Сохранить данные
          </Button>
          {isSuccess && <Alert dismissible>Данные добавлены</Alert>}
          {isError && <Alert dismissible>{prepareError(error)}</Alert>}
        </form>
      </Container>
    </HeaderContentFooter>
  );
}

export default Monitoring;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const TableForm = styled.div`
  margin: 50px 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 22vh 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  margin-bottom: 15px;

  &:first-child {
    text-align: left;
  }
`;

const Article = styled.div`
  margin-bottom: 50px;
`;

const StyledDivider = styled(Divider)`
  margin: 50px 0;
`;
