import { topDonorsUrl } from '@Constants/url';
import { IRating } from '@core/story';
import { baseFetch } from '@Services/fetch';

export const getTopDonors = async (sexId: string) => {
  const { data } = await baseFetch<IRating[]>({
    url: topDonorsUrl(sexId),
  });

  return data;
};
