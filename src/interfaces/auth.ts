export interface LoginParams {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

export interface User {
  email: string;
}
