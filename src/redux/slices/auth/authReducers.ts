import { PayloadAction } from '@reduxjs/toolkit';

//* Interfaces
import { authState } from './authSlice';
import { User } from 'interfaces/auth';

//* Initial state
import { initialState } from './authSlice';

export default {
  setAuthenticated: (state: authState, action: PayloadAction<User>) => {
    state.isAuthenticated = true;
    state.user = { ...state.user, ...action.payload };
  },
  handleAuthenticated: (state: authState, action: PayloadAction<boolean>) => {
    state.isAuthenticated = action.payload;
  },
};
