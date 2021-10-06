import { userAtom } from '@Store/atoms/user-atom';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const useRequireAuth = (rejectUrl = '/auth') => {
  const { push } = useRouter();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user) {
      push(rejectUrl);
    }
  }, [push, rejectUrl, user]);
};
