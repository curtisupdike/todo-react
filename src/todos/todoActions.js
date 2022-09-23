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

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = (text) => ({
  type: TOGGLE_TODO,
  text,
});
