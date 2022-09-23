import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BiPlus as PlusIcon } from "react-icons/bi";
import { addTodo } from "./todoActions";
import Button from "../components/IconButton";
import FormInput from "../components/FormInput";

const Form = styled.form`
  display: flex;
  margin-bottom: 1.25rem;
`;

const Input = styled(FormInput)`
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: var(--icon-button-size);
`;

const SubmitButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  background-color: #007bff;
`;

const NewTodoForm = ({ setTodos }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={input}
        placeholder="New to-do"
        onChange={(e) => setInput(e.target.value)}
      />
      <SubmitButton ariaLabel="Add to-do">
        <PlusIcon />
      </SubmitButton>
    </Form>
  );
};

export default NewTodoForm;
