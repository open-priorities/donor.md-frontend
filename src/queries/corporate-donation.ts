import { ICorporateDonation } from '@core/donation';
import { baseFetch } from '@Services/fetch';

export const getCorporateDonations = async () => {
  const { data } = await baseFetch<ICorporateDonation[]>({
    url: '/corporate-donation',
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createCorporateDonations = async (payload: ICorporateDonation) => {
  const { data } = await baseFetch({
    url: `/corporate-donation`,
    data: payload,
    method: 'POST',
  });
  return data;
};

export const updateCorporateDonations = async (payload: ICorporateDonation) => {
  await baseFetch({
    url: `/corporate-donation`,
    headers: {
      authorization: 'token',
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteCorporateDonations = async (id: string | string[]) => {
  await baseFetch({
    url: `/corporate-donation`,
    headers: {
      authorization: 'token',
    },
    method: 'DELETE',
    data: id,
  });
};
