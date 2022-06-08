import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

//* Reducers
import authReducers from './authReducers';
//* Thunks
import { authenticateUser } from './authThunks';

//* Interfaces
import { User } from 'interfaces/auth';

export interface authState {
  isPending: boolean;
  isAuthenticated: boolean;
  user: User;
}

export const initialState = {
  isPending: false,
  isAuthenticated: false,
  user: {
    email: '',
  },
} as authState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,
  extraReducers: ({ addMatcher, addCase }) => {
    // addCase(authenticateUser.fulfilled, (state, action: PayloadAction<User>) => {
    //   state.user = { ...state.user, ...action.payload };
    // });
    // addMatcher(isAnyOf(authenticateUser.pending), (state) => {
    //   state.isPending = true;
    // });
    // addMatcher(isAnyOf(authenticateUser.fulfilled), (state) => {
    //   state.isPending = false;
    // });
    // addMatcher(isAnyOf(authenticateUser.rejected), (state) => {
    //   state.isPending = true;
    // });
  },
});

export const { setAuthenticated, handleAuthenticated } = auth.actions;

export default auth.reducer;
