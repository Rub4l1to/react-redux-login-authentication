import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import userReducer from './userReducers';

export interface userState {}

export const initialState = {} as userState;

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: userReducer,
  extraReducers: ({ addMatcher, addCase }) => {},
});

export const {} = user.actions;

export default user.reducer;
