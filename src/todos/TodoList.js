import { useSelector } from "react-redux";
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

const EmptyMessage = styled.p`
  text-align: center;
  margin: 1.25rem 0 0 0;
  padding: 1rem 0;
`;

const TodoList = () => {
  const todos = useSelector((state) => state);

  return (
    <Container>
      <NewTodoForm />
      {todos.length > 0 ? (
        <List>
          {todos.map((todo, i) => (
            <TodoListItem todo={todo} key={todo.text} />
          ))}
        </List>
      ) : (
        <EmptyMessage>No to-dos</EmptyMessage>
      )}
    </Container>
  );
};

export default TodoList;
