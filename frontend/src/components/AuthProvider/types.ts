import { User } from "../../domains/sessions/types"

export type AuthStore = {
  user?: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isError: boolean;
  error?: Error;
};

