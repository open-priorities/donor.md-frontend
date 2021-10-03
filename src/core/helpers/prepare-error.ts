import { ErrorResponse, ErrorResponseArray } from '@core/error';

export const prepareError = (error: ErrorResponse | ErrorResponseArray | null) => {
  const message = error?.response?.data?.message;
  if (Array.isArray(message)) {
    return message.map((error) => error.msg);
  }

  return !message ? [] : [message];
};
