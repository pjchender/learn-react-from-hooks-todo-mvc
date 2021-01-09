import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import clsx from 'clsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const todosDefault = [
  {
    id: uuidv4(),
    text: 'Learn React',
  },
  {
    id: uuidv4(),
    text: 'Become Frontend Developer',
  },
];

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState(todosDefault);

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
        },
      ];
    });

    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="app">
      <Header />

      <div className={clsx('add-todo', { active: inputValue.length > 0 })}>
        <div className="add-todo-icon icon"></div>
        <div className="add-todo-input">
          <input
            type="text"
            placeholder="新增工作"
            onChange={handleChange}
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

      <div className="todos">
        {todos.map((todo) => (
          <div className="task-item">
            <div className="task-item-checked">
              <span className="icon icon-circle"></span>
            </div>
            <div className="task-item-body">
              <span className="task-item-body-text">{todo.text}</span>
              <input
                className="task-item-body-input"
                type="text"
                placeholder="新增工作"
              />
            </div>
            <div className="task-item-action">
              <button className="btn-reset btn-destroy icon"> </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
