import { Tooltip } from 'antd';
import Link from 'next/link';
import { memo } from 'react';

import { IconWrapper, LinkButton, MenuItem, Paragraph } from './styles';

type MenuLinkType = {
  Icon: JSX.Element;
  href: string;
  text: string;
  active?: boolean;
  onClick?: () => void;
};

export const MenuLink = memo(({ active = false, Icon, href, text, onClick }: MenuLinkType) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <Link href={href} passHref>
      <Tooltip title={text} placement='left'>
        <MenuItem onClick={handleClick}>
          <LinkButton size='lg' active={active} variant='outline-primary'>
            <IconWrapper>
              <Icon width={30} height={30} />
            </IconWrapper>
            <Paragraph>{text}</Paragraph>
          </LinkButton>
        </MenuItem>
      </Tooltip>
    </Link>
  );
});
