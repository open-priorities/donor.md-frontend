import { Footer } from '@Components/common/footer';
import { Header } from '@Components/common/header';
import { FC } from 'react';
import styled from 'styled-components';

interface HeaderContentFooterType {
  background: string;
  className: string;
}

export const HeaderContentFooter: FC<Partial<HeaderContentFooterType>> = ({ children, ...rest }) => (
  <>
    <Header />
    <Main {...rest}>{children}</Main>
    <Footer />
  </>
);

const Main = styled.main<{ background?: string }>`
  padding: 50px 0;
  margin-top: 75px;

  @media (min-width: 1500px) {
    padding: 75px 0;
    margin-top: 75px;
    background: ${({ background }) => `url(${background})` || 'transparent'};
    //background-size: calc(0.44 * 100vw - 460px) calc(0.578 * 100vh - 203px);
    background-size: 400px, 540px;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;
