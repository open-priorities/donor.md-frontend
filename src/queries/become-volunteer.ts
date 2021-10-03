import { IBecomeVolunteer } from '@core/become-volunteer';
import { baseFetch } from '@Services/fetch';

export const getVolunteer = async () => {
  const { data } = await baseFetch<IBecomeVolunteer[]>({
    url: '/volunteer',
    headers: {
      authorization: 'token',
    },
  });
  return data;
};

export const createVolunteer = async (payload: IBecomeVolunteer) => {
  await baseFetch({
    url: `/volunteer`,
    method: 'POST',
    data: payload,
  });
};

export const updateVolunteer = async (payload: IBecomeVolunteer) => {
  await baseFetch({
    url: `/volunteer`,
    headers: {
      authorization: 'token',
    },
    method: 'PUT',
    data: payload,
  });
};

export const deleteVolunteer = async (id: string | string[]) => {
  await baseFetch({
    url: `/volunteer`,
    headers: {
      authorization: 'token',
    },
    method: 'DELETE',
    data: id,
  });
};
