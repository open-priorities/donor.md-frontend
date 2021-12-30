import { IUser } from '@core/user';
import { atom, DefaultValue, selector } from 'recoil';

export const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {} as IUser,
});

export const avatarSelector = selector<string | null>({
  key: 'avatarSelector',
  get: ({ get }) => get(userAtom).avatar,
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      reset(userAtom);
    } else {
      set(userAtom, (s) => ({ ...s, avatar: newValue }));
    }
  },
});
