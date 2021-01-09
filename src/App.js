import './App.scss';

import { ReactComponent as CheckActive } from './assets/images/check-active.svg';
import { ReactComponent as CheckCircle } from './assets/images/check-circle.svg';
import { ReactComponent as CheckHover } from './assets/images/check-hover.svg';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="add-todo">
        <div className="add-todo-icon icon d-inline-flex align-items-center justify-content-center"></div>
        <div className="add-todo-input">
          <input type="text" placeholder="新增工作" />
        </div>
        <div className="add-todo-action">
          <button className="btn-reset btn-add"> 新增 </button>
        </div>
      </div>

      <div className="todos">
        <div className="task-item">
          <div>
            <span className="d-inline-flex align-items-center justify-content-center icon">
              <CheckCircle />
            </span>
          </div>
          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
          </div>
          <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
          </div>
        </div>
        <div className="task-item edit">
          <div>
            <span className="d-inline-flex align-items-center justify-content-center icon">
              <CheckHover />
            </span>
          </div>
          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
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
        <div className="task-item destroyed">
          <div>
            <span className="d-inline-flex align-items-center justify-content-center icon">
              <CheckActive />
            </span>
          </div>
          <div className="task-item-body">
            <span className="task-item-body-text">Foobar</span>
          </div>
          <div className="task-item-action">
            <button className="btn-reset btn-destroy icon"> </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
