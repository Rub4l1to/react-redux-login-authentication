//* Interfaces
import { Auth } from 'interfaces/auth';

export const setTokens = ({ user, token, refreshToken }: Auth) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
  localStorage.setItem('refreshToken', JSON.stringify(refreshToken));
};

export const removeTokens = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('token');
};

export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1) || false;

export const getUser = () => localStorage.getItem('user');

export const setUser = (user: any) => localStorage.setItem('user', JSON.stringify(user));

export const getRefreshToken = () => localStorage.getItem('refresh_token');
