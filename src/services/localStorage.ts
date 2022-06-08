//* Interfaces
import { LoginResponse } from '../interfaces/auth';

export const setTokens = ({ token }: LoginResponse) => {
  localStorage.setItem('token', JSON.stringify(token));
};

export const removeTokens = () => {
  localStorage.removeItem('token');
};

export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1) || false;
