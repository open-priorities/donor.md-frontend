import styled, { css } from 'styled-components';

import { ColorsType } from './theme';

export declare type LinkProps = {
  underline?: boolean;
  color?: keyof ColorsType;
  bold?: boolean;
  margin?: boolean | string;
};

export const StyledLink = styled.a<LinkProps>(
  ({ color, theme, margin, bold, underline }) => css`
    color: ${!color ? theme.colors.textDark : `${theme.colors[color] || color}`};

    margin-bottom: ${!margin ? 0 : `${margin || '0.5rem'}`};

    text-decoration: ${underline ? 'underline' : ''};
    font-weight: ${bold ? 'bold' : 'normal'};

    &:hover {
      color: ${color && theme.colors[color] ? theme.colors[color] : 'black'};
      text-decoration: ${underline ? 'underline' : ''};
    }
  `,
);
