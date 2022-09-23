export const ADD_TODO = "ADD_TODO";
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  text,
});
