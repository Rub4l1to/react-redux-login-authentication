import React, { useEffect } from 'react';

//* Redux
import { useAppDispatch, useAppSelector } from 'redux/hooks';
//* Getters
import { selectAuth } from 'redux/slices/auth/authGetters';
//* Reducers
import { handleAuthenticated } from 'redux/slices/auth/authSlice';

//* Services
import { getAccessToken } from 'services/localStorage';

interface Response {
  isAuthenticated: boolean;
}

export const useAuth = (): Response => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getAccessToken() ? true : false;
    dispatch(handleAuthenticated(token));
  }, [getAccessToken()]);

  return {
    isAuthenticated,
  };
};
