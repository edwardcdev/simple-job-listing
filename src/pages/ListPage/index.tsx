import { Header, ListItem, Filter } from "../../components";
import StyledListPage from "./index.styled";
import IItem from "../../types";

interface IListPageProps {
  mockData: IItem[];
}

const ListPage: React.FC<IListPageProps> = ({ mockData }) => {
  return (
    <StyledListPage>
      <Header />
      <div className="list-page">
        <div className="list-page__container">
          <Filter />
          {mockData.map((item) => (
            <ListItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </StyledListPage>
  );
};

export default ListPage;
