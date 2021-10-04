import { useRequireAuth } from '@Hooks/useRequireAuth';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { getUser } from '@Queries/user';
import { Loading } from '@UI/loading';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import styled from 'styled-components';

const Dashboard = () => {
  useRequireAuth();

  return (
    <HeaderContentFooter>
      <Wrapper>
        <Loading />
      </Wrapper>
    </HeaderContentFooter>
  );
};

const Wrapper = styled.div`
  padding: 200px 0;
`;

export default Dashboard;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('user', getUser);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
