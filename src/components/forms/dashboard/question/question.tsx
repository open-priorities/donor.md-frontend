import styled from 'styled-components';

import { IQuestionList } from '../../../../core/interfaces/question';
import { Input, Paragraph, Select, Switch, Title } from '../../../UI';

export const Question = ({ title, paragraph, control }: IQuestionList) => {
  return (
    <Wrapper>
      <div>
        <Title as='h4' margin='10px'>
          {title}
        </Title>
        <Paragraph color='textMuted' margin='10px'>
          {paragraph}
        </Paragraph>
      </div>
      <div>
        {control.variant === 'switch' && <StyledSwitch />}
        {control.variant === 'input' && <Input placeholder={control.placeholder} />}
        {control.variant === 'select' && (
          <Select size='large'>
            {control.options &&
              control.options.map((opt) => (
                <Select.Option key={opt} value={opt}>
                  {opt}
                </Select.Option>
              ))}
          </Select>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: grid;
  @media (min-width: 768px) {
    column-gap: 30px;
    grid-template-columns: 1fr 150px;
  }
  @media (min-width: 1200px) {
    column-gap: 30px;
    grid-template-columns: 1fr 250px;
  }
`;

const WrapperSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * {
    margin-right: 15px;
  }
`;

const StyledSwitch = () => (
  <WrapperSwitch>
    <span>Да</span>
    <Switch />
    <span>Нет</span>
  </WrapperSwitch>
);
