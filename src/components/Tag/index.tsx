import { useContext } from "react";

import StyledTag from "./index.styled";
import { FilterContext } from "../../context";

export interface ITagProps {
  tag: string;
}

const Tag: React.FC<ITagProps> = ({ tag }) => {
  const { addFilter } = useContext(FilterContext);

  return <StyledTag onClick={() => addFilter(tag)}>{tag}</StyledTag>;
};

export default Tag;
