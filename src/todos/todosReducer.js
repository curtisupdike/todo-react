import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./todoActions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      if (state.filter((todo) => todo.text === action.text).length > 0) {
        return state;
      }
      return state.concat([{ text: action.text, isCompleted: false }]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.text !== action.text);
    case TOGGLE_TODO:
      return state.map((todo) => {
        return todo.text === action.text
          ? {
              text: action.text,
              isCompleted: !todo.isCompleted,
            }
          : todo;
      });
    default:
      return state;
  }
}
