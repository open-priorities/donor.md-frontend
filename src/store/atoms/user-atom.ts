import { IUser } from '@core/user';
import { atom } from 'recoil';

export const userAtom = atom<IUser | null>({
  key: 'userAtom',
  default: null,
});
