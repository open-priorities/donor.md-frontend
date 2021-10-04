import { getUser } from '@Queries/user';
import { useTypedQuery } from '@Queries/utils';
import { userAtom } from '@Store/atoms/user-atom';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useRequireAuth = () => {
  const { push } = useRouter();
  const [user, setUser] = useRecoilState(userAtom);
  const { data, isLoading } = useTypedQuery('user', () => getUser(), {
    enabled: !user,
    retry: 1,
  });

  useEffect(() => {
    if (!data && !isLoading) {
      push('/auth');
      return;
    }
    if (data) {
      setUser(data);
    }
  }, [data, isLoading, push, setUser]);

  return { isLoading: isLoading || !user };
};
