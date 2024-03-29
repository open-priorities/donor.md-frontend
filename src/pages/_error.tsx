import { Container } from '@Layouts/container';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import Icon from '@Public/images/pages/404.svg';
import { Title } from '@UI/typography';
import http from 'http';
import { DocumentContext } from 'next/document';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type ErrorPageType = { statusCode: number };

const ErrorPage = ({ statusCode }: ErrorPageType) => {
  const errorMessage =
    http.STATUS_CODES[statusCode] || 'Упс! Что-то пошло не так. Но мы Вас всегда ждём в центрах крови';
  const message = statusCode === 404 ? 'Увы, такой страницы не существует ;)' : errorMessage;

  return (
    <HeaderContentFooter>
      <Container>
        <Title bold>{message}</Title>
        <Icon
          style={{
            width: '100%',
            maxWidth: 500,
          }}
        />
      </Container>
    </HeaderContentFooter>
  );
};

export default ErrorPage;

export const getServerSideProps = async (ctx: DocumentContext) => {
  const { res, err } = ctx;
  // TODO send segment event here
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    props: {
      statusCode,
      ...(await serverSideTranslations('en', ['common'])),
    },
  };
};
