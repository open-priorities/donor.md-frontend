import { IQuestion, IQuestionList, IQuestionnaireStory } from '@core/question';
import { prepareError } from '@Helpers/prepare-error';
import { createQuestionnaireAction, getQuestionnaire } from '@Queries/questionnaire';
import { useTypedMutation, useTypedQuery } from '@Queries/utils';
import { Accordion } from '@UI/accordion';
import { Alert } from '@UI/alert';
import { Button } from '@UI/button';
import { Divider } from '@UI/dilider';
import { Form } from '@UI/form/form-item';
import { Loading } from '@UI/loading';
import { Title } from '@UI/typography';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Question } from './question';

const { Panel } = Accordion;

export const QuestionForm = () => {
  const { data, isLoading } = useTypedQuery('question', getQuestionnaire);
  const { error, mutate, isError } = useTypedMutation('question', (payload: IQuestionnaireStory) =>
    createQuestionnaireAction(payload),
  );
  const { handleSubmit } = useForm();

  const onChangeHandle = (...rest: any[]) => {
    // eslint-disable-next-line no-console
    console.log(rest);
  };

  if (isLoading) return <Loading />;

  const onSubmit = (data: IQuestionnaireStory) => {
    mutate(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Accordion defaultActiveKey={data ? data[0]._id : '1'} onChange={onChangeHandle} ghost>
        {data &&
          data.map((panel: IQuestion) => (
            <Panel header={<PanelHeader title={panel.title} />} key={panel._id}>
              {panel.list.map(({ title, ...rest }: IQuestionList, i: number) => (
                <Question title={`${i + 1} ${title}`} {...rest} />
              ))}
            </Panel>
          ))}
      </Accordion>
      {isError && <Alert dismissible>{prepareError(error)}</Alert>}
      <Button variant='outline-danger' size='lg'>
        Сохранить
      </Button>
    </FormWrapper>
  );
};

const PanelHeader = ({ title }: { title: string }) => (
  <DividerWrapper>
    <Title as='h4' bold>
      {title}
    </Title>
  </DividerWrapper>
);

const FormWrapper = styled(Form)`
  margin-top: 25px;
`;

const DividerWrapper = styled(Divider)`
  &.ant-divider {
    margin: 0;
  }
`;
