import * as axios from 'axios';
import { config } from '../../config';

export const getSayDeveloperHeaders = () => {
  const headers: Record<string, string> = {};

  return headers;
};

export const sayDeveloperRequest = axios.default.create({
  baseURL: config.SAY_DEVELOPER_API_URL,
  headers: getSayDeveloperHeaders(),
  withCredentials: true,
});
