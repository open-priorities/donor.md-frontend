import BonusIcon from '@Public/images/pages/dashboard/left-aside/bonuses.svg';
import DetailsIcon from '@Public/images/pages/dashboard/left-aside/details.svg';
import DonationsIcon from '@Public/images/pages/dashboard/left-aside/donations.svg';
import LogoutIcon from '@Public/images/pages/dashboard/left-aside/logout.svg';
import RecipientsIcon from '@Public/images/pages/dashboard/left-aside/recipients.svg';
import ReviewsIcon from '@Public/images/pages/dashboard/left-aside/reviews.svg';
import SettingsIcon from '@Public/images/pages/dashboard/left-aside/settings.svg';

export const mock = [
  {
    Icon: DetailsIcon,
    href: '/dashboard/details',
    text: 'Мои данные',
  },
  {
    Icon: DonationsIcon,
    href: '/dashboard/donations',
    text: 'Мои донации',
  },
  {
    Icon: ReviewsIcon,
    href: '/dashboard/reviews',
    text: 'Мои отзывы',
  },
  {
    Icon: SettingsIcon,
    href: '/dashboard/settings',
    text: 'Настройки',
  },
  {
    Icon: BonusIcon,
    href: '/dashboard/bonuses',
    text: 'Бонусы',
  },
  {
    Icon: RecipientsIcon,
    href: '/dashboard/recipients',
    text: 'Реципиенты',
  },
  {
    Icon: LogoutIcon,
    href: '#',
    text: 'Выход',
  },
];
