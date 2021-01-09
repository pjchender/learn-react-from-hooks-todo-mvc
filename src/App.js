import './App.scss';

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
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9"
                ></path>
              </svg>
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
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill-rule="evenodd">
                  <path d="M12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-17c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9"></path>
                  <path d="M10.9902 13.3027l-2.487-2.51-.71.704 3.193 3.224 5.221-5.221-.707-.707z"></path>
                </g>
              </svg>
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
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.9854 15.0752l-3.546-3.58 1.066-1.056 2.486 2.509 4.509-4.509 1.06 1.061-5.575 5.575zm1.015-12.075c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                ></path>
              </svg>
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
