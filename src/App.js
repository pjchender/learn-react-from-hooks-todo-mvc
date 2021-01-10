import './App.scss';

import AddTodo from './components/AddTodo';
import Footer from './components/Footer';
import Header from './components/Header';
import Todos from './components/Todos';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const todosDefault = [
  {
    id: uuidv4(),
    title: 'Learn React',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: 'Become Frontend Developer',
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
          title: inputValue,
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
          title: inputValue,
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

      <AddTodo
        inputValue={inputValue}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleAddTodo={handleAddTodo}
      />

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
