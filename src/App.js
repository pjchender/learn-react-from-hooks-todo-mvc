import './App.scss';

import TodoApp from 'views/TodoApp';
import Login from 'views/Login';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const [isFBInitialized, setIsFBInitialized] = useState(false);
  const [authResponse, setAuthResponse] = useState();

  useEffect(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit
    window.fbAsyncInit = function () {
      // 初始化 Facebook SDK
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: process.env.REACT_APP_FB_APP_VERSION,
      });

      console.log('[fbAsyncInit] after window.FB.init');
      setIsFBInitialized(true);
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

  // 取得使用者登入狀態
  useEffect(() => {
    if (!isFBInitialized) {
      return;
    }
    window.FB.getLoginStatus(function (response) {
      console.log('[getLoginStatus]', response);
      setAuthResponse(response);
    });
  }, [isFBInitialized]);

  // 呼叫 Graph API 取得使用者資料
  useEffect(() => {
    if (!isFBInitialized) {
      return;
    }

    if (!authResponse) {
      return;
    }

    if (authResponse?.status !== 'connected') {
      return;
    }

    window.FB.api('/me', 'GET', { fields: 'name,email' }, function (response) {
      console.log('[/me]', response);
    });
  }, [isFBInitialized, authResponse]);

  // 判斷使用者有無權限檢視頁面若沒有權限則導回登入頁
  useEffect(() => {
    // FB 需已經初始化
    if (!isFBInitialized) {
      return;
    }

    // 已經確認使用者登入狀態
    if (!authResponse) {
      return;
    }

    if (currentPage !== 'Login' && authResponse?.status !== 'connected') {
      console.log('使用者未登入，導回登入頁');
      setCurrentPage('Login');
      return;
    }

    if (currentPage === 'Login' && authResponse?.status === 'connected') {
      console.log('登入並轉址');
      setCurrentPage('TodoApp');
    }

    console.log('不做事');
  }, [currentPage, isFBInitialized, authResponse]);

  // 使用者點擊登入
  const handleFBLogin = () => {
    if (!isFBInitialized) {
      return;
    }

    window.FB.login(
      function (response) {
        console.log('handleFBLogin', response);
        setAuthResponse(response);
      },
      { scope: 'public_profile,email' }
    );
  };

  // 使用者點擊登出
  const handleFBLogout = () => {
    // FB SDK 已經初始化
    if (!isFBInitialized) {
      return;
    }

    // 已經確認使用者登入狀態
    if (!authResponse) {
      return;
    }

    // 使用者尚未登入
    if (authResponse?.status !== 'connected') {
      return;
    }

    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
      setAuthResponse(response);
    });
  };

  return (
    <div className="app">
      {currentPage === 'Login' && <Login handleFBLogin={handleFBLogin} />}
      {currentPage === 'TodoApp' && <TodoApp handleFBLogout={handleFBLogout} />}
    </div>
  );
}

export default App;
