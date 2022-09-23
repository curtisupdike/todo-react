import { useState } from "react";
import styled from "styled-components";

import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const Container = styled.div`
  padding: 1.25rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const mockTodos = [
  { text: "Test One", isCompleted: true },
  { text: "Test Two", isCompleted: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(mockTodos);

  return (
    <Container>
      <NewTodoForm setTodos={setTodos} />
      <List>
        {todos.map((todo, i) => (
          <TodoListItem todo={todo} key={i} />
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
