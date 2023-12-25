import { sayDeveloperRequest } from '../api/request';
import { Session } from './types';

export const getCurrentSession = async () => {
  const { data } = await sayDeveloperRequest.get<Session>('/session');

  return data;
};
