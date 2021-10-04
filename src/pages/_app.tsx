import 'antd/dist/antd.css';
import 'normalize.css';

import { PlanningButton } from '@Components/planning-button';
import { ErrorBoundary } from '@Decorators/ErrorBoundary';
import { DebugObserver } from '@Store/debugObserver';
import { GlobalStyles } from '@Styles/globals';
import { TypographyStyles } from '@Styles/typography';
import { theme } from '@UI/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import configSEO from '../../next-seo.config';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        />
        <title>DONOR.MD - место, где люди помогают людям</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <DebugObserver />
              <GlobalStyles />
              <TypographyStyles />
              <DefaultSeo {...configSEO} />
              <Component {...pageProps} />
              <PlanningButton />
            </RecoilRoot>
          </QueryClientProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
};

export default appWithTranslation(App);
