import axios, { AxiosError } from 'axios';

export const isApiError = (error: unknown): error is AxiosError => {
  return axios.isAxiosError(error);
};
