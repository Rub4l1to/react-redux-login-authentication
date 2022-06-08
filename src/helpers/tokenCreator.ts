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

export const getFormDataHeader = () => {
  let token = getAccessToken();
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
};
