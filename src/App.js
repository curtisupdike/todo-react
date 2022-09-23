import styled from "styled-components";

import TodoList from "./todos/TodoList";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  border: var(--border);
  border-radius: var(--border-radius);
`;

const Title = styled.h1`
  margin: 0;
  padding: 0.75rem 1.25rem;
  border-bottom: var(--border);
  background-color: rgba(0, 0, 0, 0.03);
  font-size: 2rem;
  text-align: center;
`;

const App = () => (
  <Container>
    <Title>To-Do List</Title>
    <TodoList />
  </Container>
);

export default App;
