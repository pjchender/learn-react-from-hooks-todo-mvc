import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import clsx from 'clsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const todosDefault = [
  {
    id: uuidv4(),
    text: 'Learn React',
    isDone: false,
  },
  {
    id: uuidv4(),
    text: 'Become Frontend Developer',
    isDone: true,
  },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todosDefault);

  const numOfTodos = todos.filter((todo) => !todo.isDone).length;

  const handleAddTodo = () => {
    if (inputValue.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          text: inputValue,
          isDone: false,
        },
      ];
    });

    setInputValue('');
  };

  const handleKeyPress = (event) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (inputValue.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          text: inputValue,
        },
      ];
    });

    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (id) => () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsDone = (id) => () => {
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

  return (
    <div className="app">
      <Header />

      <div className={clsx('add-todo', { active: inputValue.length > 0 })}>
        <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
        <div className="add-todo-input">
          <input
            id="add-todo-input"
            type="text"
            placeholder="新增工作"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            value={inputValue}
          />
        </div>
        <div className="add-todo-action">
          <button className="btn-reset btn-add" onClick={handleAddTodo}>
            {' '}
            新增{' '}
          </button>
        </div>
      </div>

      <Todos
        todos={todos}
        handleDelete={handleDelete}
        handleToggleIsDone={handleToggleIsDone}
      />

      <Footer numOfTodos={numOfTodos} />
    </div>
  );
}

export default App;
