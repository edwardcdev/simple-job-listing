import { useContext } from "react";

import StyledFilterItem from "./index.styled";
import RemoveIcon from "../../assets/images/icon-remove.svg";
import { FilterContext } from "../../context";

interface IFilterItemProps {
  filter: string;
}

const FilterItem: React.FC<IFilterItemProps> = ({ filter }) => {
  const { removeFilter } = useContext(FilterContext);

  return (
    <StyledFilterItem>
      <div className="filter-item__tag">{filter}</div>
      <div className="filter-item__remove" onClick={() => removeFilter(filter)}>
        <img src={RemoveIcon} alt="remove icon" />
      </div>
    </StyledFilterItem>
  );
};

export default FilterItem;
