import React, { useEffect } from 'react';

//* Hooks
import { useForm } from 'hooks/useForm';

//* Redux
import { useAppSelector } from 'redux/hooks';
import { selectAuth } from 'redux/slices/auth/authGetters';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { handleSubmit, handleChange } = useForm();
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(selectAuth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} value="j.krrishchandran@gmail.com" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} value="samplereact" />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};
