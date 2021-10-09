import { Progress as AntProgress } from 'antd';
import styled, { css } from 'styled-components';

export const Progress = styled(AntProgress)(
  ({ theme }) => css`
    .ant-progress-inner {
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      box-shadow: 0 5px 15px ${theme.colors.primary};
      border-radius: 25px;
    }

    .ant-progress-bg {
      background: ${theme.colors.red};
      box-shadow: 0 5px 15px ${theme.colors.redDiluted};
      border-radius: 25px;
      height: 10px;
    }
  `,
);
