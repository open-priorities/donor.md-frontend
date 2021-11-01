import { baseFetch } from '@Services/fetch';

export const getAvatar = async () => {
  const { data } = await baseFetch<string>({
    url: '/avatar',
    headers: {
      authorization: 'token',
    },
  });

  return data;
};

export const updateAvatar = async (payload: FormData) => {
  const { data } = await baseFetch<string>({
    url: '/avatar',
    data: payload,
    method: 'post',
    headers: {
      authorization: 'token',
    },
  });

  return data;
};
