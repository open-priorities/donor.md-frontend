import { IPlanning } from '@core/planning';
import { baseFetch } from '@Services/fetch';

export const getPlanning = async () => {
  const { data } = await baseFetch<IPlanning[]>({
    url: `/donation/planing`,
    headers: {
      authorization: 'token',
    },
  });

  return data;
};

export const createPlanning = async (payload: IPlanning) => {
  await baseFetch({
    url: `/donation/planing`,
    method: 'POST',
    headers: {
      authorization: 'token',
    },
    data: payload,
  });
};
