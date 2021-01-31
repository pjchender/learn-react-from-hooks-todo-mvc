import './App.scss';

import TodoApp from 'views/TodoApp';
import Login from 'views/Login';
import useFacebookLogin from 'hooks/useFacebookLogin';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';

const App = () => {
  const [response, handleFBLogin, handleFBLogout] = useFacebookLogin();
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
