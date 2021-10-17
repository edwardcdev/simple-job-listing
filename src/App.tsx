import { FilterProvider } from "./context";
import { ListContainer } from "./containers";
import "./App.css";

function App() {
  return (
    <FilterProvider>
      <ListContainer />
    </FilterProvider>
  );
}

export default App;
