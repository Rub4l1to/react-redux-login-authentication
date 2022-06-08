import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import authReducer from './authReducers';

export interface authState {}

export const initialState = {} as authState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducer,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const {} = auth.actions;

export default auth.reducer;
