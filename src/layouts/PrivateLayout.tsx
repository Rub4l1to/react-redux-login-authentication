import { Navigate, Outlet } from 'react-router-dom';

//* Hooks
import { useAuth } from 'hooks/useAuth';

export const PrivateOutlet = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
