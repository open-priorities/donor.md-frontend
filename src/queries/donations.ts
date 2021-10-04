import { IDonation, IDonationResponse } from '@core/donation';
import { baseFetch } from '@Services/fetch';

export const getDonation = async () => {
  const { data } = await baseFetch<IDonationResponse[]>({
    url: `/donation`,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const addDonation = async (payload: IDonation) => {
  const { data } = await baseFetch<IDonation>({
    url: `/donation`,
    headers: {
      authorization: 'token',
    },
    method: 'POST',
    data: payload,
  });
  return data;
};
