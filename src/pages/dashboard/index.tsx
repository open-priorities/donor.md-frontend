import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { Loading } from '@UI/loading';
import styled from 'styled-components';

const Dashboard = () => {
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
  return {
    props: {},
  };
};
