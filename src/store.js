import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/todosReducer";

export default configureStore({
  reducer: todos,
});
