import { useContext, useMemo } from "react";

import mockData from "../../mock";
import { FilterContext } from "../../context";
import { ListPage } from "../../pages";
import { getTags } from "../../helper";

const ListContainer = () => {
  const { filters } = useContext(FilterContext);

  const filteredMockData = useMemo(() => {
    if (filters && filters.length > 0) {
      return mockData.filter((data) => {
        const tags = getTags(data);
        return filters.every((filter) => tags.includes(filter));
      });
    }

    return mockData;
  }, [filters]);

  return <ListPage mockData={filteredMockData} />;
};

export default ListContainer;
