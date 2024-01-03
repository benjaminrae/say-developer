import { sayDeveloperRequest } from '../api/request';
import { Session } from './types';

export const getCurrentSession = async () => {
  const { data } = await sayDeveloperRequest.get<Session>('/session');

  return data;
};

export const navigateToGoogleAuth = () => {
  window.location.href = 'http://localhost:3000/auth/google';
};

export const navigateToGithubAuth = () => {
  window.location.href = 'http://localhost:3000/auth/github';
};

export const navigateToProviderLogout = (provider: string) => {
  window.location.href = `http://localhost:3000/logout/${provider}`;
};
