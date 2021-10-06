import { IDonorStory } from '@core/story';
import { baseFetch } from '@Services/fetch';

export const getStories = async () => {
  const { data } = await baseFetch<IDonorStory[]>({
    url: `/story/`,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const getUserStory = async () => {
  const { data } = await baseFetch<IDonorStory[]>({
    url: `/user/story/`,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createOrUpdateUserStory = async (payload: string) => {
  await baseFetch({
    method: 'POST',
    url: `/story`,
    data: payload,
    headers: {
      authorization: 'token',
    },
  });
};
