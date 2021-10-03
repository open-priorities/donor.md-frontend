import { IReview } from '@core/review';
import { baseFetch } from '@Services/fetch';

export const getReview = async () => {
  const { data } = await baseFetch<IReview[]>({
    url: `/review`,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createReview = async (payload: IReview) => {
  const { data } = await baseFetch<IReview>({
    url: `/review`,
    method: 'POST',
    data: payload,
    headers: {
      authorization: 'token',
    },
  });
  return data;
};
