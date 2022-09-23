import styled from "styled-components";
import {
  BiTrash as TrashIcon,
  BiCheckSquare as CheckedIcon,
  BiSquare as UncheckedIcon,
} from "react-icons/bi";

import IconButton from "../components/IconButton";

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  border: var(--border);
  padding: 0.5rem;
  &:first-child {
    margin-top: 0;
  }
`;

const TodoText = styled.p`
  flex: 1;
  padding: 0.375rem 0.5rem;
  margin: 0;
`;

const CompletedButton = styled(IconButton)`
  background-color: inherit;
  font-size: 1.5rem;
`;

const RemoveButton = styled(IconButton)`
  color: #fff;
  background-color: #dc3545;
`;

const TodoListItem = ({ todo }) => (
  <Container>
    <CompletedButton ariaLabel="Mark to-do as completed">
      {todo.isCompleted ? <CheckedIcon /> : <UncheckedIcon />}
    </CompletedButton>
    <TodoText>{todo.text}</TodoText>
    <RemoveButton ariaLabel="Delete to-do">
      <TrashIcon />
    </RemoveButton>
  </Container>
);

export default TodoListItem;
