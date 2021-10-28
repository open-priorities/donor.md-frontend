import styled, { css } from 'styled-components';

export const TextArea = styled.textarea(
  ({ theme }) => css`
    width: 100%;
    padding: 10px;
    border-color: ${theme.colors.redDiluted};
    border-radius: ${theme.radius};

    &::placeholder {
      font-size: 0.95em;
    }

    &:hover {
      border-color: ${theme.colors.red};
    }

    &:focus {
      outline: 0;
      border-color: ${theme.colors.red};
      box-shadow: 0 0 10px 5px rgb(248 186 180 / 20%);
    }
  `,
);
