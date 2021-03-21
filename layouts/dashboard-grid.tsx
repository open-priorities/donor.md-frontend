import React from 'react';
import styled from 'styled-components';
import LeftMenu from '../components/left-menu';
import RightMenu from '../components/right-menu';
import { useRequiredAuth } from '../hooks/useRequiredAuth';
import { useAuth } from '../hooks/useAuth';
import { Loading } from '../components/UI/loading';
import CenterAllAxes from './center-all-axes';

type Props = {
  children: React.ReactNode;
  leftImage?: string;
  className?: string;
};

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  @media (min-width: 576px) {
    grid-template-columns: max-content 1fr max-content;
  }
`;

const Container = styled.section`
  padding: 50px 30px;
  width: 100%;
`;

const DashboardGrid: React.FC<Props> = ({ children, className, leftImage }): JSX.Element => {
  useRequiredAuth(null, '/auth');
  const auth = useAuth();
  if (!auth?.user)
    return (
      <CenterAllAxes>
        <Loading />
      </CenterAllAxes>
    );
  return (
    <Main>
      <LeftMenu image={leftImage} />
      <Container className={className}>{children}</Container>
      <RightMenu />
    </Main>
  );
};

export default DashboardGrid;
