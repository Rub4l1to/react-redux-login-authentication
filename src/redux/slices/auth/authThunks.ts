import { createAsyncThunk } from '@reduxjs/toolkit';

//* Api
import { AxiosResponse } from 'axios';
import { baseAxios } from 'api/baseAxios';

//* Interfaces
import { LoginParams, LoginResponse, User } from 'interfaces/auth';
import { setTokens } from 'services/localStorage';
import { setAuthenticated } from './authSlice';

export const authenticateUser = createAsyncThunk('auth/authenticateUser', async ({ ...data }: LoginParams, thunkapi): Promise<User> => {
  /** @Rub4l1to I will fake it for now */
  //   const respose = await baseAxios.post('/auth/login', data);
  // if (response.status !== 200) throw Error(response.statusText);

  if (data.email === 'j.krrishchandran@gmail.com') {
    setTokens({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiIGoua3JyaXNoY2hhbmRyYW5AZ21haWwuY29tIn0.nalXd1Ky6DYu61gLiTGSoAsbaKJANdLwVGsfKJ5Eigg',
    });
    thunkapi.dispatch(
      setAuthenticated({
        email: data.email,
      }),
    );
  }

  return { email: data.email };
});
