import { useState } from "react";
import styled from "styled-components";
import { BiPlus as PlusIcon } from "react-icons/bi";

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
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") return;
    setTodos((todos) => [...todos, { text: input, isCompleted: false }]);
    setInput("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        value={input}
        placeholder="New todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <SubmitButton>
        <PlusIcon />
      </SubmitButton>
    </Form>
  );
};

export default NewTodoForm;
