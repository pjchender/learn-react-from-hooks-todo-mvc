import './App.scss';

import Footer from './components/Footer';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const todos = [
    {
      id: uuidv4(),
      text: 'Learn React',
    },
    {
      id: uuidv4(),
      text: 'Become Frontend Developer',
    },
  ];
  return (
    <div className="app">
      <Header />

      <div className="add-todo">
        <div className="add-todo-icon icon"></div>
        <div className="add-todo-input">
          <input type="text" placeholder="新增工作" />
        </div>
        <div className="add-todo-action">
          <button className="btn-reset btn-add"> 新增 </button>
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
