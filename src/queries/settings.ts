import { IChangePassword, ISettings } from '@core/settings';
import { baseFetch } from '@Services/fetch';

export const getSettings = async () => {
  const { data } = await baseFetch<ISettings | null>({
    url: `/settings`,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const updateSettings = async (payload: ISettings) => {
  const { data } = await baseFetch<ISettings>({
    method: 'put',
    url: `/settings`,
    headers: {
      authorization: 'token',
    },
    data: payload,
  });
  return data;
};

export const updatePassword = async (payload: IChangePassword) => {
  const { data } = await baseFetch<string>({
    method: 'post',
    url: `/settings/`,
    headers: {
      authorization: 'token',
    },
    data: payload,
  });
  return data;
};
