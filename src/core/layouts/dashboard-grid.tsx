import { LeftMenu } from '@Components/left-menu';
import { useRequireAuth } from '@Hooks/useRequireAuth';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { Loading } from '@UI/loading';
import { FC, memo } from 'react';
import styled from 'styled-components';

import RightMenu from '../../components/right-menu';

type DashboardGridType = {
  leftImage?: string;
  className?: string;
};

export const DashboardGrid: FC<DashboardGridType> = memo(({ children, className, leftImage }) => {
  const { isLoading } = useRequireAuth();

  if (isLoading)
    return (
      <HeaderContentFooter>
        <Wrapper>
          <Loading />
        </Wrapper>
      </HeaderContentFooter>
    );
  return (
    <Main>
      <LeftMenu image={leftImage} />
      <Container className={className}>{children}</Container>
      <RightMenu />
    </Main>
  );
});

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

const Wrapper = styled.div`
  padding: 200px 0;
`;
