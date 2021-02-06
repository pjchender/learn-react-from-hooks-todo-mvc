const baseURL = 'https://todo-mvc.herokuapp.com/api/v1';

export const getTodos = async () => {
  const res = await fetch(`${baseURL}/todos/`, {
    headers: {
      'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
    },
  });

  return res.json();
};

export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  const res = await fetch(`${baseURL}/todos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
    },
    body: JSON.stringify({
      title,
      isDone,
    }),
  });

  return res.json();
};

export const deleteTodo = async (id) => {
  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
    },
  });

  return res.json();
};

export const patchTodo = async (payload) => {
  const { id, title, isDone } = payload;

  const res = await fetch(`${baseURL}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Facebook-Client-Token': localStorage.getItem('facebookClientToken'),
    },
    body: JSON.stringify({
      title,
      isDone,
    }),
  });

  return res.json();
};
