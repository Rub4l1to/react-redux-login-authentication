import React, { ChangeEvent, FormEvent, useState } from 'react';

//* Redux
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authenticateUser } from 'redux/slices/auth/authThunks';

interface Response {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useForm = (): Response => {
  const dispatch = useAppDispatch();

  const [data, setDataForm] = useState<{
    email: string;
    password: string;
  }>({
    email: 'j.krrishchandran@gmail.com',
    password: 'samplereact',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authenticateUser(data));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...data, [e.target.name]: e.target.value });
  };

  return {
    handleSubmit,
    handleChange,
  };
};
