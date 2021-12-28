import { NumberedList } from '@UI/numbered-list';
import { Paragraph, Title } from '@UI/typography';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const list = [
  `Возраст<b> от 18 до 60 лет</b>`,
  `Вес <b>более 55 кг</b></br></br>
   Люди с массой тела меньше 55 кг допускаются к донорству в индивидуальном порядке по усмотрению врача-трансфузиолога.
   </br></br>
`,
  'Наличие гражданства ПМР или временной прописки',
  'Не иметь абсолютных противопоказаний',
  'Не иметь временных ограничений на момент сдачи крови',
];

export const HeadSection = () => {
  const { pathname } = useRouter();

  return (
    <section>
      <Title margin='0 0 40px 0' bold>
        Минимальные требования к донору
      </Title>
      <NumberedList list={list} />
      <Title as='h3' margin='35px 0 20px 0' bold>
        Противопоказания
      </Title>
      <Paragraph>
        Перед процедурой сдачи крови каждый донор проходит консультацию с врачом-трансфузиологом. Не
        стесняйтесь задавать вопросы по поводу ваших заболеваний.
      </Paragraph>
      <Paragraph>
        Мы подготовили для вас противопоказания к донорству: абсолютных, то есть независящих от давности
        заболевания и результатов лечения, и временных — действующих лишь определенный срок.
      </Paragraph>
      <Paragraph margin='15px 0 30px 0'>
        Руководствуйтесь, пожалуйста, этими ограничениями лишь в том случае, когда Вы совершенно уверены в
        наличии у себя соответствующего заболевания или состояния здоровья.
      </Paragraph>
      <LinkGroup>
        <Link href='/minimum-donor-requirements' passHref>
          <StyledLink active={pathname === '/minimum-donor-requirements'}>
            Временные противопоказания
          </StyledLink>
        </Link>
        <Link href='/minimum-donor-requirements/absolute' passHref>
          <StyledLink active={pathname === '/minimum-donor-requirements/absolute'}>
            Абсолютные противопоказания
          </StyledLink>
        </Link>
      </LinkGroup>
    </section>
  );
};

const LinkGroup = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & ${StyledLink} {
      margin-bottom: 15px;
    }

    @media (min-width: ${theme.media.sm}) {
      flex-direction: row;
      max-height: 62px;
    }
  `,
);

const StyledLink = styled.a<{ active: boolean }>(
  ({ theme, active }) => css`
    width: 100%;
    padding: 1rem 1rem;
    line-height: 1rem;
    font-size: 1rem;
    text-align: center;
    color: ${active ? theme.colors.white : theme.colors.danger};
    background: ${active ? theme.colors.danger : theme.colors.white};
    border: 1px solid ${theme.colors.danger};
    border-radius: 16px;

    &:hover {
      color: ${active ? theme.colors.danger : theme.colors.white};
      border-color: ${active ? theme.colors.danger : theme.colors.white};
      background: ${active ? theme.colors.white : theme.colors.danger};
    }

    @media (min-width: ${theme.media.sm}) {
      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  `,
);
