import { Button } from '@UI/button';
import styled, { css } from 'styled-components';

export const Aside = styled.aside<{ image?: string }>(
  ({ theme, image }) => css`
    display: none;
    padding: 45px;
    background: white;
    border-right: 1px solid ${theme.colors.redDiluted};

    @media (min-width: ${theme.media.sm}) {
      display: block;
    }

    @media (min-width: ${theme.media.xl}) {
      padding: 25px 30px;
      background-image: ${image && `url(${image})`};
      background-size: 100% 24vw;
      background-repeat: no-repeat;
      background-position: left bottom;
    }
  `,
);

export const AsideWrapper = styled.div`
  top: 45px;
  position: sticky;
`;

export const Menu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  padding: 0;
`;
export const MenuItem = styled.li`
  padding: 10px 0;
`;

export const LinkButton = styled(Button)<{ active: boolean }>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    color: ${active ? theme.colors.white : theme.colors.black};

    border: 1px solid ${theme.colors.white};
    background: ${active ? theme.colors.red : 'white'};

    & svg path {
      color: ${active ? theme.colors.white : theme.colors.black};
    }

    &:hover svg path,
    &:focus svg path {
      fill: ${theme.colors.danger};
    }
  `,
);

export const Paragraph = styled.p`
  display: none;
  @media (min-width: 1200px) {
    display: inline;
    margin: 0;
  }
`;

export const IconWrapper = styled.div`
  &,
  & svg {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1200px) {
    margin-right: 10px;
  }
`;
