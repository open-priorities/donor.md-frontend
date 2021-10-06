import { StyledLink } from '@UI/links';
import { Popover } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

import { Logo } from '../../logo';
import { PopoverStyle } from './popover.style';
import {
  Burder,
  Dot,
  HeaderGrid,
  HeaderWrapper,
  LinkAsButton,
  MenuItem,
  MenuList,
  MenuListProps,
} from './styles';

export const Header = () => {
  const [hide, setToggleOpen] = useState<boolean>(false);
  return (
    <HeaderWrapper>
      <HeaderGrid>
        <Logo />
        <PopoverStyle />
        <Popover content={<Menu displayM='flex' />} trigger='click' placement='bottomRight'>
          <Burder type='button' onClick={() => setToggleOpen((s) => !s)}>
            <Dot />
            <Dot hide={hide} />
            <Dot />
          </Burder>
        </Popover>
        <Menu />
      </HeaderGrid>
    </HeaderWrapper>
  );
};

const Menu = (props: MenuListProps) => (
  <MenuList {...props}>
    <MenuItem>
      <Link href='/about-service' passHref>
        <StyledLink>О сервисе</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/about-donation' passHref>
        <StyledLink>О донорстве</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/support-project' passHref>
        <StyledLink>Поддержать</StyledLink>
      </Link>
    </MenuItem>
    <MenuItem>
      <Link href='/dashboard'>
        <LinkAsButton color='white'>Кабинет донора</LinkAsButton>
      </Link>
    </MenuItem>
  </MenuList>
);
