import { useState, useEffect } from 'react';

const useFacebookLogin = ({ appId, cookie, xfbml, version }) => {
  const [response, setResponse] = useState();

  // 載入 Facebook SDK 並完成 init 的動作
  useEffect(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit
    window.fbAsyncInit = function () {
      // 初始化 Facebook SDK
      window.FB.init({
        appId,
        cookie,
        xfbml,
        version,
      });

      console.log('[fbAsyncInit] after window.FB.init');

      // 取得使用者登入狀態
      window.FB.getLoginStatus(function (response) {
        console.log('[getLoginStatus]', response);
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
  }, [appId, cookie, xfbml, version]);

  // 使用者點擊登入
  const handleFBLogin = () => {
    window.FB.login(
      function (response) {
        console.log('handleFBLogin', response);
        setResponse(response);
      },
      { scope: 'public_profile,email' }
    );
  };

  // 使用者點擊登出
  const handleFBLogout = () => {
    window.FB.logout(function (response) {
      console.log('handleFBLogout', response);
      setResponse(response);
    });
  };

  return [response, handleFBLogin, handleFBLogout];
};

export default useFacebookLogin;
