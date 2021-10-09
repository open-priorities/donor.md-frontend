import { Progress } from '@UI/progress';
import { Paragraph } from '@UI/typography';
import styled, { css } from 'styled-components';

export const DonorProgress = () => {
  return (
    <DonorProgressWrapper>
      <Box>
        <Paragraph color='red' margin='0' size='22px' bold>
          До следующей сдачи крови:
        </Paragraph>
        <Paragraph color='red' size='3.125rem' margin='0' bold>
          7&nbsp;
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
          26&nbsp;
          <Paragraph as='span' margin='0' color='redDiluted' size='1.25rem' bold>
            сдач
          </Paragraph>
        </Paragraph>
      </Box>
      <Progress percent={55} showInfo={false} status='exception' />
    </DonorProgressWrapper>
  );
};

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
