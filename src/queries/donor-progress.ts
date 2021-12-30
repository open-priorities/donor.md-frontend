import { donorProgressUrl } from '@Constants/url';
import { DonorProgress } from '@core/donor-progress';
import { baseFetch } from '@Services/fetch';

export const getDonorProgress = async () => {
  const { data } = await baseFetch<DonorProgress>({
    url: donorProgressUrl,
  });

  return data;
};
