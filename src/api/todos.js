const baseURL = 'http://localhost:3001';

export const getTodos = () => {
  return fetch(`${baseURL}/todos`).then((res) => res.json());
};

export const createTodo = async (payload) => {
  const { title, isDone, isEdit } = payload;
  const res = await fetch(`${baseURL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
      isEdit,
    }),
  });

  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'DELETE',
  });

  return await res.json();
};

export const patchTodo = async (payload) => {
  const { id, title, isDone, isEdit } = payload;

  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      isDone,
      isEdit,
    }),
  });

  return await res.json();
};
