import { useState, useEffect } from 'react';

const useFacebookLogin = () => {
  const [response, setResponse] = useState();

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
        localStorage.setItem(
          'facebookClientToken',
          response?.authResponse?.accessToken
        );
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
        localStorage.setItem(
          'facebookClientToken',
          response?.authResponse?.accessToken
        );
      },
      { scope: 'public_profile,email' }
    );
  };

  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
      localStorage.setItem(
        'facebookClientToken',
        response?.authResponse?.accessToken
      );
      setResponse(response);
    });
  };

  return [response, handleFBLogin, handleFBLogout];
};

export default useFacebookLogin;
