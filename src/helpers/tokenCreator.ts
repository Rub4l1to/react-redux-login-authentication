import { getAccessToken } from 'services/localStorage';

export const getHeaderInfo = () => {
  let token = getAccessToken();
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};
