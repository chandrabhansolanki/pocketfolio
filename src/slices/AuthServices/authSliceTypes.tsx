export interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string;
  userData?: UserId;
}
