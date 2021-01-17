import TodoItem from './TodoItem';

const Todos = ({
  todos,
  handleDelete,
  handleSave,
  handleToggleIsDone,
  updateIsEdit,
}) => (
  <div className="todos">
    {console.log('[render] todos')}
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleToggleIsDone={handleToggleIsDone}
        updateIsEdit={updateIsEdit}
      />
    ))}
  </div>
);

export default Todos;
