import { topDonorsUrl } from '@Constants/url';
import { IStory } from '@core/story';
import { baseFetch } from '@Services/fetch';

export const getTopDonors = async (sexId: string) => {
  const { data } = await baseFetch<IStory[]>({
    url: topDonorsUrl(sexId),
  });

  return data;
};
