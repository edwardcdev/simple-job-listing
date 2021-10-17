import { useContext, useMemo } from "react";

import { FilterItem } from "../../components";
import { FilterContext } from "../../context";
import StyledFilter from "./index.styled";

const Filter = () => {
  const { filters, clearFilter } = useContext(FilterContext);

  const hasFilters = useMemo(() => filters && filters.length > 0, [filters]);

  return (
    <StyledFilter hasFilters={hasFilters}>
      <div className="filter">
        <div className="filter__items">
          {filters.map((filter) => (
            <FilterItem key={filter} filter={filter} />
          ))}
        </div>
        {hasFilters && (
          <div className="filter__clear" onClick={() => clearFilter()}>
            Clear
          </div>
        )}
      </div>
    </StyledFilter>
  );
};

export default Filter;
