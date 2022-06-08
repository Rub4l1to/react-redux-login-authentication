import React, { useEffect, useState } from 'react';

//* Services
import { getAccessToken } from 'services/localStorage';

interface Response {
  isAuthenticated: boolean;
}

export const useAuth = (): Response => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = getAccessToken() ? true : false;
    setIsAuthenticated(token);
  }, []);

  return {
    isAuthenticated,
  };
};
