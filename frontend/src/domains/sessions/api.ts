import { config } from '../../config';
import { sayDeveloperRequest } from '../api/request';
import { Session } from './types';

export const getCurrentSession = async () => {
  const { data } = await sayDeveloperRequest.get<Session>('/session');

  return data;
};

export const navigateToGoogleAuth = () => {
  window.location.href = `${config.SAY_DEVELOPER_API_URL}/auth/google`;
};

export const navigateToGithubAuth = () => {
  window.location.href = `${config.SAY_DEVELOPER_API_URL}/auth/github`;
};

export const navigateToProviderLogout = (provider: string) => {
  window.location.href = `${config.SAY_DEVELOPER_API_URL}/logout/${provider}`;
};
