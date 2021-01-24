import './App.scss';

import TodoApp from 'views/TodoApp';
import Login from 'views/Login';
import { useState, useEffect } from 'react';
import useFacebookLogin from 'hooks/useFacebookLogin';
import AuthContext from 'contexts/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('Login');
  const [response, handleFBLogin, handleFBLogout] = useFacebookLogin({
    appId: process.env.REACT_APP_FB_APP_ID,
    cookie: true,
    xfbml: true,
    version: process.env.REACT_APP_FB_APP_VERSION,
  });

  // 判斷使用者有無權限檢視頁面若沒有權限則導回登入頁
  useEffect(() => {
    // 已經確認使用者登入狀態
    if (!response) {
      return;
    }

    if (currentPage !== 'Login' && response?.status !== 'connected') {
      console.log('使用者未登入，導回登入頁');
      setCurrentPage('Login');
      return;
    }

    if (currentPage === 'Login' && response?.status === 'connected') {
      console.log('登入並轉址');
      setCurrentPage('TodoApp');
    }

    console.log('不做事');
  }, [currentPage, response]);

  if (!response) {
    return <div className="app">Loading</div>;
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
        {currentPage === 'Login' && <Login />}
        {currentPage === 'TodoApp' && <TodoApp />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
