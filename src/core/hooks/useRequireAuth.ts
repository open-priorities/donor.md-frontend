import { storage } from '@Services/storage';
import { userAtom } from '@Store/atoms/user-atom';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const useRequireAuth = (rejectUrl = '/auth') => {
  const { push } = useRouter();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    const isTokenExist = storage.get('token');
    if (!user && !isTokenExist) {
      push(rejectUrl);
    }
  }, [push, rejectUrl, user]);
};
