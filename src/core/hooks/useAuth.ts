import { getUser } from '@Queries/user';
import { useTypedQuery } from '@Queries/utils';
import { userAtom } from '@Store/atoms/user-atom';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export const useAuth = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const { data, isLoading } = useTypedQuery('user', () => getUser(), {
    enabled: !user,
    retry: 1,
  });

  useEffect(() => {
    data && setUser(data);
  }, [data, setUser]);

  return { isLoading: isLoading || !user };
};
