import { useLogOut } from '@Hooks/useLogOut';
import { useRouter } from 'next/dist/client/router';
import { memo, useEffect, useState } from 'react';

import { ResponsiveLogo } from '../logo';
import { MenuLink } from './menu-link';
import { mock } from './mock';
import { Aside, AsideWrapper, Menu } from './styles';

export const LeftMenu = memo(({ image }: { image?: string }) => {
  const [activeHref, setActiveHref] = useState('');
  const { pathname } = useRouter();
  const { destroy } = useLogOut();

  const menuCount = mock.length;

  useEffect(() => {
    const activeMenu = mock.filter((item) => item.href === pathname)[0];
    setActiveHref(activeMenu ? activeMenu.href : '/dashboard/donations');
  }, [pathname, setActiveHref]);

  const [logout] = [...mock].splice(-1);

  return (
    <Aside image={image}>
      <AsideWrapper>
        <ResponsiveLogo />
        <Menu>
          {mock.slice(0, menuCount - 1).map((item) => (
            <MenuLink {...item} key={item.text} active={item.href === activeHref} />
          ))}
          <MenuLink {...logout} onClick={destroy} />
        </Menu>
      </AsideWrapper>
    </Aside>
  );
});
