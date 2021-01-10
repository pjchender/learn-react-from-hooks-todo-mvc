import clsx from 'clsx';

const Todos = ({ todos, handleToggleIsDone, handleDelete }) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className={clsx('task-item', { done: todo.isDone })} key={todo.id}>
          <div className="task-item-checked">
            <span
              className="icon icon-checked"
              onClick={handleToggleIsDone(todo.id)}
            />
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
            <button
              className="btn-reset btn-destroy icon"
              onClick={handleDelete(todo.id)}
            >
              {' '}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
