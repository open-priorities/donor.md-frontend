import { Divider as AntDivider } from 'antd';
import styled, { css } from 'styled-components';

export const Divider = styled(AntDivider)(
  ({ theme }) =>
    css`
      &.ant-divider-horizontal.ant-divider-with-text {
        border-top-color: ${theme.colors.redDiluted};
      }

      &.ant-divider-horizontal.ant-divider-with-text:before {
        width: 0;
      }

      &.ant-divider-horizontal.ant-divider-with-text:after {
        width: 100%;
      }

      &.ant-divider-horizontal.ant-divider-with-text .ant-divider-inner-text {
        padding-left: 0;
      }
      border-top: 1px solid ${theme.colors.redDiluted};
    `,
);
