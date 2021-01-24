import { createContext } from 'react';

const AuthContext = createContext({
  status: null,
  authResponse: null,
  handleFBLogin: null,
  handleFBLogout: null,
});

export default AuthContext;
