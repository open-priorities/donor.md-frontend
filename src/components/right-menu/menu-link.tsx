import { Paragraph } from '@UI/typography';
import Link from 'next/link';
import { memo } from 'react';
import styled, { css } from 'styled-components';

export type MenuLinkType = {
  icon: JSX.Element;
  href: string;
  text: string;
};

export const MenuLink = memo(({ href, text }: MenuLinkType) => (
  <Link href={href} passHref>
    <MenuItem>
      <Paragraph color='textDark' margin='0' size='1.625rem'>
        {text}
      </Paragraph>
      {/* <IconWrapper>{icon}</IconWrapper> */}
    </MenuItem>
  </Link>
));

const MenuItem = styled.li(
  ({ theme }) => css`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr min-content;
    margin-bottom: 25px;
    padding: 25px 40px;
    color: ${theme.colors.black};
    border-radius: ${theme.radius};
    border: 1px solid ${theme.colors.red};
    box-shadow: 0 30px 25px -20px rgba(248, 186, 180, 0.5);
  `,
);
// const IconWrapper = styled.div(
//   ({ theme }) => css`
//     width: 75px;
//     height: 75px;
//     color: ${theme.colors.red};
//   `,
// );
