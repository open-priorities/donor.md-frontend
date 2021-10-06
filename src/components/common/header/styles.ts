import { Container } from '@Layouts/container';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  background: white;
  z-index: 999;
`;

export const HeaderGrid = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Burder = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: white;
  @media (min-width: 992px) {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

export declare type DotProps = {
  hide?: boolean;
};

export const Dot = styled.div<DotProps>`
  display: ${({ hide }) => (hide ? 'none' : 'block')};
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
`;

export declare type MenuListProps = {
  displayM?: string;
};

export const MenuList = styled.ul<MenuListProps>`
  display: ${({ displayM }) => displayM || 'none'};
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 15px 0;
  @media (min-width: 992px) {
    margin: 0 15px 0 0;
  }
`;

export const LinkAsButton = styled.a(
  ({ theme }) => css`
    color: ${theme.colors.white};
    padding: 10px 20px;
    border-radius: 25px;
    background: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    transition: all 0.3s ease;

    &:hover {
      color: ${theme.colors.red};
      background: ${theme.colors.white};
    }
  `,
);
