import { getUserUrl } from '@Constants/url';
import { IUser } from '@core/user';

import { baseFetch } from './fetch';

export const serverSession = async (ctx: any) => {
  const token = ctx.req?.token;

  if (!token) {
    return {
      authorization: false,
    };
  }

  const user = await baseFetch<IUser>({
    url: getUserUrl,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  ctx.req = {
    ...ctx.req,
    user,
  };

  return { user };
};
