import { Title } from '@UI/typography';
import styled, { css } from 'styled-components';

export const DonorCard = () => {
  const count = 0;
  return (
    <DonorCardWrapper>
      <Counter>{count}</Counter>
      <Centered>
        <Title as='h3' color='white' margin='0' bold>
          Мои Донации
        </Title>
        <Title as='h4' color='white' margin='0'>
          <Bold>42</Bold> - реципиента получили помощь
        </Title>
      </Centered>
    </DonorCardWrapper>
  );
};

const DonorCardWrapper = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 75px 1fr;
    padding: 15px;
    margin-bottom: 50px;
    color: ${theme.colors.white};
    background: ${theme.colors.red};
    border-radius: ${theme.radius};
    box-shadow: 0 30px 25px -20px rgba(255, 67, 75, 0.25);
  `,
);

const Counter = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    border-radius: ${theme.radius};
    border: ${`1px solid ${theme.colors.red}`};
    background: url('/images/pages/dashboard/right-aside/heart.svg') no-repeat center;
    background-size: 100%;
  `,
);

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Bold = styled.span`
  font-weight: bold;
`;
