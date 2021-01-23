import './App.scss';

import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import { useState, useEffect } from 'react';
import { getTodos, createTodo, deleteTodo, patchTodo } from './api/todos';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const numOfTodos = todos.filter((todo) => !todo.isDone).length;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }

    const data = await createTodo({
      title: inputValue,
      isDone: false,
    });

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          ...data,
          isEdit: false,
        },
      ];
    });

    setInputValue('');
  };

  const handleKeyPress = async (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (inputValue.length === 0) {
      return;
    }

    const data = await createTodo({
      title: inputValue,
      isDone: false,
    });

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          ...data,
          isEdit: false,
        },
      ];
    });

    setInputValue('');
  };

  const handleDelete = (id) => async () => {
    await deleteTodo(id);

    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => async () => {
    const currentTodo = todos.find((t) => t.id === id);
    await patchTodo({
      id,
      isDone: !currentTodo.isDone,
    });

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  };

  const handleSave = async (payload) => {
    const { id, title } = payload;
    await patchTodo({
      id,
      title,
    });

    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, title, isEdit: false };
      })
    );
  };

  const updateIsEdit = ({ id, isEdit }) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, isEdit };
      })
    );
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();

      setTodos(
        todos.map((todo) => ({
          ...todo,
          isEdit: false,
        }))
      );
    };

    fetchTodos();
  }, []);

  const [isFBInitialized, setIsFBInitialized] = useState(false);
  const [authResponse, setAuthResponse] = useState();

  useEffect(() => {
    // SDK 載入完成時會立即呼叫 fbAsyncInit
    window.fbAsyncInit = function () {
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

    // load facebook sdk script
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

  useEffect(() => {
    // FB 需已經初始化
    if (!isFBInitialized) {
      return;
    }

    // 已經確認使用者登入狀態
    if (!authResponse) {
      return;
    }

    if (authResponse?.status !== 'connected') {
      console.log('使用者未登入，導回登入頁');
      return;
    }

    console.log('合法的使用者');
  }, [isFBInitialized, authResponse]);

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

  // 使用者登出
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
      <Header />

      <AddTodo
        inputValue={inputValue}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleAddTodo={handleAddTodo}
      />

      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleToggleIsDone={handleToggleIsDone}
        updateIsEdit={updateIsEdit}
      />

      <button onClick={handleFBLogin}>Facebook Login</button>
      <button onClick={handleFBLogout}>Facebook Logout</button>

      <Footer numOfTodos={numOfTodos} />
    </div>
  );
}

export default App;
