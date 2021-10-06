import { storage } from '@Services/storage';
import { userAtom } from '@Store/atoms/user-atom';
import { useRouter } from 'next/dist/client/router';
import { useSetRecoilState } from 'recoil';

export const useLogOut = () => {
  const setUser = useSetRecoilState(userAtom);
  const { push } = useRouter();

  const destroy = () => {
    setUser(null);
    storage.remove('token');
    push('/');
  };

  return {
    destroy,
  };
};
