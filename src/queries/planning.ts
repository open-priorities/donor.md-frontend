import { planingUrl } from '@Constants/url';
import { IPlanning } from '@core/planning';
import { baseFetch } from '@Services/fetch';

export const getPlanning = async () => {
  const { data } = await baseFetch<IPlanning[]>({
    url: planingUrl,
    headers: {
      authorization: 'token',
    },
  });

  return data;
};

export const createPlanning = async (payload: IPlanning) => {
  await baseFetch({
    url: planingUrl,
    method: 'POST',
    headers: {
      authorization: 'token',
    },
    data: payload,
  });
};
