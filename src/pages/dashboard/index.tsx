import { useAuth } from '@Hooks/useAuth';
import { HeaderContentFooter } from '@Layouts/header-content-footer';
import { storage } from '@Services/storage';
import { userAtom } from '@Store/atoms/user-atom';
import { Loading } from '@UI/loading';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

const Dashboard = () => {
  useAuth();

  const { push } = useRouter();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const isTokenExist = storage.get('token');
    if (!user && !isTokenExist) {
      push('/auth');
    } else {
      push('/dashboard/details');
    }
  }, [push, user]);

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
