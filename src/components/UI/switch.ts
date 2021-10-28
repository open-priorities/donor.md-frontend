import { hexToRGB } from '@Helpers/converters';
import { Switch as AntSwitch } from 'antd';
import styled, { css } from 'styled-components';

export const Switch = styled(AntSwitch)(
  ({ theme }) => css`
    &.ant-switch {
      border: 2px solid ${theme.colors.redDiluted};
      background: transparent;
    }
    .ant-switch-handle {
      width: 14px;
      height: 14px;
    }
    .ant-switch-handle:before {
      background: ${theme.colors.redDiluted};
    }
    &.ant-switch:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${hexToRGB(theme.colors.redDiluted, 0.1)};
    }
  `,
);
