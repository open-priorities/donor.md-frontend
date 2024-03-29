import { Tooltip } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import { IMenuLinkProps } from './mock';
import { IconWrapper, LinkButton, MenuItem, Paragraph } from './styles';

type WithButton = {
  handleClick?: () => void;
};

type MenuLinkType = IMenuLinkProps & { active: boolean } & WithButton;

export const MenuLink = ({ active, imageSrc, href, text }: MenuLinkType) => (
  <Link href={href} passHref>
    <Tooltip title={text} placement='left'>
      <MenuItem>
        <LinkButton size='lg' active={active} variant='outline-primary'>
          <IconWrapper>
            <Image src={imageSrc} width={30} height={30} />
          </IconWrapper>
          <Paragraph>{text}</Paragraph>
        </LinkButton>
      </MenuItem>
    </Tooltip>
  </Link>
);
