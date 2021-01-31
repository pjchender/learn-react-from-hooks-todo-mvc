import './App.scss';

import TodoApp from 'views/TodoApp';
import Login from 'views/Login';
import { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

const App = () => {
  const [response, setResponse] = useState();

  const isAtLogin = useRouteMatch('/login');

  useEffect(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit，在這個函式中對 Facebook SDK 進行初始化
    window.fbAsyncInit = function () {
      // 初始化 Facebook SDK
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_APP_VERSION,
      });

      console.log('[fbAsyncInit] after window.FB.init');

      // 取得使用者登入狀態
      window.FB.getLoginStatus(function (response) {
        console.log('[refreshLoginStatus]', response);
        setResponse(response);
      });

      window.FB.AppEvents.logPageView();
    };
    // 載入 Facebook SDK
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const handleFBLogin = () => {
    // 跳出 Facebook 登入的對話框
    window.FB.login(
      function (response) {
        console.log('handleFBLogin', response);
        setResponse(response);
      },
      { scope: 'public_profile,email' }
    );
  };

  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
      setResponse(response);
    });
  };

  if (!response) {
    return <></>;
  }

  if (response.status !== 'connected' && !isAtLogin) {
    return <Redirect to="/login" />;
  }

  return (
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
          <Login handleFBLogin={handleFBLogin} status={response.status} />
        </Route>
        <Route path="/todos">
          <TodoApp handleFBLogout={handleFBLogout} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
