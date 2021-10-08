import { Tooltip } from 'antd';
import Link from 'next/link';
import { memo } from 'react';

import { IconWrapper, LinkButton, MenuItem, Paragraph } from './styles';

type MenuLinkType = {
  icon: JSX.Element;
  href: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export const MenuLink = memo(({ active = false, icon, href, text, onClick }: MenuLinkType) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Link href={href} passHref>
      <Tooltip title={text} placement='left'>
        <MenuItem onClick={handleClick}>
          <LinkButton size='lg' active={active} variant='outline-primary'>
            <IconWrapper>{icon}</IconWrapper>
            <Paragraph>{text}</Paragraph>
          </LinkButton>
        </MenuItem>
      </Tooltip>
    </Link>
  );
});
