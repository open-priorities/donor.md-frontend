import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { Title } from '../typography';

export const Form = styled.form``;

interface IProps {
  columns: number;
  columnsSm: number;
  help: string;
  margin: string;
  label: string | ReactNode;
  required: boolean;
  error: string;
}

export const FormItem: FC<Partial<IProps>> = ({
  label,
  help,
  children,
  columns = 1,
  columnsSm = 1,
  required,
  margin = '0 0 10px 0',
  error,
}) => {
  return (
    <FormItemWrapper margin={margin}>
      <Wrapper columns={columns} columnsSm={columnsSm}>
        <Column>
          {label && (
            <Label as='h5' required={required}>
              {label}
            </Label>
          )}
          {help && <Help>{help}</Help>}
        </Column>
        <Column>{children}</Column>
      </Wrapper>
      <Error>{error}</Error>
    </FormItemWrapper>
  );
};

const FormItemWrapper = styled.div<{ margin?: string }>(
  ({ margin }) => css`
    margin: ${margin};
  `,
);

const Wrapper = styled.div<{ columns: number; columnsSm: number }>(
  ({ columns, columnsSm, theme }) => css`
    display: grid;
    grid-template-columns: ${`repeat(${columnsSm}, 1fr)`};

    @media (min-width: ${theme.media.lg}) {
      grid-template-columns: ${`repeat(${columns},${columns === 1 ? '1fr' : '50%'})`};
    }
  `,
);

const Column = styled.div``;

const Error = styled.div(
  ({ theme }) => css`
    height: 14px;
    margin: 8px 0;
    font-size: 0.8125em;
    color: ${theme.colors.danger};
  `,
);

const Label = styled(Title)<{ required?: boolean }>(
  ({ required, theme }) => css`
    margin: 5px 0 15px 5px;

    &::after {
      display: ${required ? 'inline-block' : 'none'};
      margin-left: 4px;
      color: ${theme.colors.redDiluted};
      font-size: 0.875em;
      line-height: 1;
      content: '*';
      top: -7px;
    }
  `,
);

const Help = styled.span(
  ({ theme }) => css`
    font-size: 0.875em;
    color: ${theme.colors.textMuted};
  `,
);
