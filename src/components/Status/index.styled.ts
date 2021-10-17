import styled from "styled-components";

import { IStatusProps } from "./index";

const StyledStatus = styled.div<IStatusProps>`
  border-radius: 10px;
  color: white;
  font-size: 10px;
  line-height: 10px;
  font-weight: 700;
  padding: 0.8em 0.8em 0.6em 0.8em;
  background-color: ${(props) =>
    props.type === "new!" ? "hsl(180, 29%, 50%)" : "hsl(180, 14%, 20%)"};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default StyledStatus;
