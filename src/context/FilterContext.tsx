import { useState, createContext } from "react";

interface IFilterContextProps {
  filters: string[];
  addFilter(param: string): void;
  removeFilter(param: string): void;
  clearFilter(): void;
}

const FilterContext = createContext<IFilterContextProps>({
  filters: [],
  addFilter: () => {},
  removeFilter: () => {},
  clearFilter: () => {},
});

interface IFilterProviderProps {
  children: React.ReactNode;
}

const FilterProvider: React.FC<IFilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<string[]>([]);

  const addFilter = (newFilter: string) => {
    if (!filters.includes(newFilter)) {
      setFilters((prev) => [...prev, newFilter]);
    }
  };
  const removeFilter = (filter: string) => {
    setFilters((prev) => prev.filter((oldFilter) => oldFilter !== filter));
  };
  const clearFilter = () => {
    setFilters([]);
  };

  const value = { filters, addFilter, removeFilter, clearFilter };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
