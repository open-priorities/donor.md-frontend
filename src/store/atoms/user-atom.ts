import { IUser } from '@core/user';
import { atom, DefaultValue, selector } from 'recoil';

export const userAtom = atom<IUser | null>({
  key: 'userAtom',
  default: null,
});

export const avatarSelector = selector<string | null>({
  key: 'avatarSelector',
  get: ({ get }) => {
    const user = get(userAtom);
    return user ? user.avatar : null;
  },
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(userAtom);
    } else {
      set(userAtom, (s) => (s ? { ...s, avatar: newValue } : null));
    }
  },
});
