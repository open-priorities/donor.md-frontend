import { storyUrl, userStoryUrl } from '@Constants/url';
import { IDonorStory } from '@core/story';
import { baseFetch } from '@Services/fetch';

export const getStories = async () => {
  const { data } = await baseFetch<IDonorStory[]>({
    url: storyUrl,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const getUserStory = async () => {
  const { data } = await baseFetch<IDonorStory>({
    url: userStoryUrl,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createOrUpdateUserStory = async (payload: string) => {
  await baseFetch({
    method: 'POST',
    url: storyUrl,
    data: {
      story: payload,
    },
    headers: {
      authorization: 'token',
    },
  });
};
