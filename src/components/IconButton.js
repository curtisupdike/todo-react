import styled from "styled-components";
import Button from "./Button";

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  padding: 0;
`;

export default IconButton;
