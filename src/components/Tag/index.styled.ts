import styled from "styled-components";

const StyledTag = styled.div`
  border-radius: 4px;
  color: hsl(180, 29%, 50%);
  font-size: 12px;
  line-height: 12px;
  font-weight: 700;
  padding: 0.8em 0.8em 0.6em 0.8em;
  background-color: hsl(180, 29%, 90%);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: hsl(180, 29%, 50%);
  }
`;

export default StyledTag;
