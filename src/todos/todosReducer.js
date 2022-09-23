import { ADD_TODO, REMOVE_TODO } from "./todoActions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      if (state.filter((todo) => todo.text === action.text).length > 0) {
        return state;
      }
      return state.concat([{ text: action.text, isCompleted: false }]);
    case REMOVE_TODO:
      return state.filter((todo) => todo.text !== action.text);
    default:
      return state;
  }
}
