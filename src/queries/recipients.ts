import { IRecipient } from '@core/recipient';
import { baseFetch } from '@Services/fetch';

export const getRecipients = async () => {
  const { data } = await baseFetch<IRecipient[]>({
    url: '/recipient',
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createRecipients = async (payload: IRecipient) => {
  await baseFetch({
    url: `/recipient`,
    method: 'POST',
    data: payload,
  });
};

export const updateRecipients = async (payload: IRecipient) => {
  await baseFetch({
    url: `/recipient`,
    headers: {
      authorization: 'token',
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteRecipients = async (id: string | string[]) => {
  await baseFetch({
    url: `/recipient`,
    headers: {
      authorization: 'token',
    },
    method: 'DELETE',
    data: id,
  });
};
