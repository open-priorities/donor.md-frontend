import { getDonorProgress } from '@Queries/donor-progress';
import { useTypedQuery } from '@Queries/utils';
import { Loading } from '@UI/loading';
import { Progress } from '@UI/progress';
import { Paragraph, Title } from '@UI/typography';
import styled, { css } from 'styled-components';

export const DonorProgress = () => {
  const { data, isLoading } = useTypedQuery('donor-progress', getDonorProgress);

  if (isLoading || !data) return <Loading />;

  return (
    <>
      <DonorProgressWrapper>
        <Box>
          <Paragraph color='red' margin='0' size='22px' bold>
            До следующей сдачи крови:
          </Paragraph>
          <Paragraph color='red' size='3.125rem' margin='0' bold>
            {data.nextBloodDonation}&nbsp;
            <Paragraph as='span' margin='0' color='redDiluted' size='1.25rem' bold>
              дней
            </Paragraph>
          </Paragraph>
        </Box>
        <Progress percent={75} showInfo={false} status='exception' />
        <Box>
          <Paragraph color='red' margin='0' size='22px' bold>
            До почетного донора:
          </Paragraph>
          <Paragraph color='red' size='3.125rem' margin='0' bold>
            {data.honorary}&nbsp;
            <Paragraph as='span' margin='0' color='redDiluted' size='1.25rem' bold>
              сдач
            </Paragraph>
          </Paragraph>
        </Box>
        <Progress percent={55} showInfo={false} status='exception' />
      </DonorProgressWrapper>
      <DonorCardWrapper>
        <Counter>{data.donations}</Counter>
        <Centered>
          <Title as='h3' color='white' margin='0' bold>
            Мои Донации
          </Title>
          <Title as='h4' color='white' margin='0'>
            <Paragraph as='span' margin='0' color='white' bold>
              {data.recipients}
            </Paragraph>{' '}
            - реципиента получили помощь
          </Title>
        </Centered>
      </DonorCardWrapper>
    </>
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

const DonorProgressWrapper = styled.div(
  ({ theme }) => css`
    margin-bottom: 40px;
    padding: 25px 40px;
    background: ${theme.colors.white};
    border-radius: ${theme.radius};
    border: ${`1px solid ${theme.colors.red}`};
    box-shadow: 0 30px 25px -20px rgba(248, 186, 180, 0.5);
  `,
);

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
`;
