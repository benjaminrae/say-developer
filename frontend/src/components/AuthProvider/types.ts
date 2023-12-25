export type AuthStore = {
  user?: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isError: boolean;
  error?: Error;
};

export type User = {
  provider: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  nickName: string;
};
