import React from 'react';
import styled from 'styled-components';
import LeftMenu from '../components/left-menu';
import RightMenu from '../components/right-menu';

type Props = {
  children: React.ReactNode;
  leftImage?: string;
  className?: string;
};

const Main = styled.main`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  height: 100%;
`;

const Container = styled.section`
  padding: 25px;
  width: 100%;
  max-width: 1140px;
`;

const DashboardGrid: React.FC<Props> = ({ children, className, leftImage }): JSX.Element => (
  <Main>
    <LeftMenu image={leftImage} />
    <Container className={className}>{children}</Container>
    <RightMenu />
  </Main>
);

export default DashboardGrid;
