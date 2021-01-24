import React from 'react';

const AuthContext = React.createContext({
  status: null,
  authResponse: null,
  handleFBLogin: null,
  handleFBLogout: null,
});

export default AuthContext;
