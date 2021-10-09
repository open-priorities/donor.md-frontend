import { baseFetch } from '@Services/fetch';

export const updateAvatar = async (payload: File) => {
  const { data } = await baseFetch<string>({
    url: '/avatar',
    data: payload,
  });

  return data;
};
