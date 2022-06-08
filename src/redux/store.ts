import { configureStore } from '@reduxjs/toolkit';

//* Reducers
import rootReducers from './rootReducer';

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
