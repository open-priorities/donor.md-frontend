import { Select as AntSelect } from 'antd';
import styled from 'styled-components';

export const Select = styled(AntSelect)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.redDiluted};
    font-size: 1rem;
    border-radius: 16px;
    display: block;
  }

  &.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.red};
  }

  &:focus,
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.red};
    box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
  }

  span.ant-select-selection-item {
    display: block;
  }
`;
