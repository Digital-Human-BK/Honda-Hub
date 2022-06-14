import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const useAuthContext = () => {
  return useContext(AuthContext);
};

export default useAuthContext;
