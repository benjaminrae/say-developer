export type Session = {
  userId: string;
  user: User;
};

export type User = {
  userId: string;
  email: string;
  provider: string;
  name: string;
  firstName: string;
  lastName: string;
  nickName: string;
  avatarUrl: string;
  description: string;
  location: string;
  accessToken: string;
  accessTokenSecret: string;
  expiresAt: string;
  idToken: string;
  rawData: Record<string, unknown>;
}

