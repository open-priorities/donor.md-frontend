import BonusIcon from '@Public/images/pages/dashboard/left-aside/bonuses.svg';
import DetailsIcon from '@Public/images/pages/dashboard/left-aside/details.svg';
import DonationsIcon from '@Public/images/pages/dashboard/left-aside/donations.svg';
import LogoutIcon from '@Public/images/pages/dashboard/left-aside/logout.svg';
import RecipientsIcon from '@Public/images/pages/dashboard/left-aside/recipients.svg';
import ReviewsIcon from '@Public/images/pages/dashboard/left-aside/reviews.svg';
import SettingsIcon from '@Public/images/pages/dashboard/left-aside/settings.svg';

export const mock = [
  {
    icon: <DetailsIcon />,
    href: '/dashboard/details',
    text: 'Мои данные',
  },
  {
    icon: <DonationsIcon />,
    href: '/dashboard/donations',
    text: 'Мои донации',
  },
  {
    icon: <ReviewsIcon />,
    href: '/dashboard/reviews',
    text: 'Мои отзывы',
  },
  {
    icon: <SettingsIcon />,
    href: '/dashboard/settings',
    text: 'Настройки',
  },
  {
    icon: <BonusIcon />,
    href: '/dashboard/bonuses',
    text: 'Бонусы',
  },
  {
    icon: <RecipientsIcon />,
    href: '/dashboard/recipients',
    text: 'Реципиенты',
  },
  {
    icon: <LogoutIcon />,
    href: '#',
    text: 'Выход',
  },
];
