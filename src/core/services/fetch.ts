import { backendUrl } from '@Constants/url';
import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { storage } from './storage';

const api = axios.create({
  baseURL: backendUrl,
});

export const baseFetch = <T>({
  url = '/',
  method = 'GET',
  headers = {},
  params = {},
  data = {},
  ...config
}: AxiosRequestConfig): AxiosPromise<T> => {
  if (headers?.authorization === 'token') {
    const token = storage.get<string>('token');
    if (token) {
      headers.authorization = `Bearer ${token}`;
    } else {
      headers.authorization = '';
    }
  }
  return api({
    url,
    method,
    headers,
    params,
    data,
    ...config,
  });
};
