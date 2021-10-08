import Add from '@Public/images/pages/dashboard/right-aside/add-donation.svg';
import Question from '@Public/images/pages/dashboard/right-aside/question.svg';
import Schedule from '@Public/images/pages/dashboard/right-aside/schedule-donation.svg';
import Support from '@Public/images/pages/dashboard/right-aside/support-project.svg';
import styled, { css } from 'styled-components';

import { DonorCard } from '../donor-card';
import { DonorInfo } from '../donor-info';
import { DonorProgress } from '../donor-progress';
import { MenuLink } from './menu-link';

const mock = [
  {
    icon: <Schedule />,
    href: '/dashboard/details',
    text: 'Запланировать Донацию',
  },
  {
    icon: <Add />,
    href: '/dashboard/donations',
    text: 'Добавить Донацию',
  },
  {
    icon: <Question />,
    href: '/dashboard/reviews',
    text: 'Ваш отзыв / Вопрос',
  },
  {
    icon: <Support />,
    href: '/support-project',
    text: 'Поддержать Проект',
  },
];

export const RightMenu = () => {
  return (
    <Aside>
      <DonorInfo />
      <DonorCard />
      <DonorProgress />
      <Menu>
        {mock.map((link) => (
          <MenuLink key={link.href} {...link} />
        ))}
      </Menu>
    </Aside>
  );
};

const Aside = styled.aside(
  ({ theme }) => css`
    display: none;
    padding: 45px;
    background: ${theme.colors.primary};
    max-width: 460px;

    @media (min-width: 992px) {
      display: block;
    }
  `,
);

const Menu = styled.ul`
  margin-top: 30px;
  list-style-type: none;
  padding: 0;
`;
