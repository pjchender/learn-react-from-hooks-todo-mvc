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
      isEdit: false,
    });

    setTodos((prevTodos) => {
      return [...prevTodos, data];
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
      isEdit: false,
    });

    setTodos((prevTodos) => {
      return [...prevTodos, data];
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
      isEdit: false,
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
      const data = await getTodos();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  console.log('[render] app');
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

      <Footer numOfTodos={numOfTodos} />
    </div>
  );
}

export default App;
