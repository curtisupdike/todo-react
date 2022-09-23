import { ADD_TODO } from "./todoActions";

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const { text } = action;
      if (state.filter((todo) => todo.text === text).length > 0) {
        return state;
      }
      return state.concat([{ text, isCompleted: false }]);
    default:
      return state;
  }
}
