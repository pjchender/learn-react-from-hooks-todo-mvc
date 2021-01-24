import './App.scss';

import TodoApp from 'views/TodoApp';
import Login from 'views/Login';
import useFacebookLogin from 'hooks/useFacebookLogin';
import AuthContext from 'contexts/AuthContext';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

const App = () => {
  const [response, handleFBLogin, handleFBLogout] = useFacebookLogin({
    appId: process.env.REACT_APP_FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: process.env.REACT_APP_FB_APP_VERSION,
  });

  const isAtLogin = useRouteMatch('/login');

  if (!response) {
    return <></>;
  }

  if (response.status !== 'connected' && !isAtLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <AuthContext.Provider
      value={{
        status: response.status,
        authResponse: response.authResponse,
        handleFBLogin,
        handleFBLogout,
      }}
    >
      <div className="app">
        <Switch>
          <Route exact path="/">
            {response.status === 'connected' ? (
              <Redirect to="/todos" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/todos">
            <TodoApp />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
