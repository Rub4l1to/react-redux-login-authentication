import type { RootState } from 'redux/store';

export const selectUser = (state: RootState) => state.user;
