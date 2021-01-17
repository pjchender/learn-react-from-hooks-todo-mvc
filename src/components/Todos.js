import TodoItem from './TodoItem';

const Todos = ({ todos, handleToggleIsDone, handleDelete }) => (
  <div className="todos">
    {console.log('[render] todos')}
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleToggleIsDone={handleToggleIsDone}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);

export default Todos;
