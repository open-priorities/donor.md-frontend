import { IUser, IUserWithToken } from '@core/user';
import { atom } from 'recoil';

export const userAtom = atom<IUser | IUserWithToken>({
  key: 'userAtom',
  default: {
    id: '',
    cityId: '',
    corporateId: '',
    avatar: '',
    phoneMobile: '',
    creationDate: '',
    groupId: '',
    statusId: '',
    bloodGroupId: '',
    sexId: '',
    fullname: '',
    email: '',
    phone: '',
    dateBirth: '',
    honorary: false,
  },
});
