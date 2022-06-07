import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useAuthContext = () => {
  const contextState = useContext(AuthContext);
  return contextState;
};

export default useAuthContext;
