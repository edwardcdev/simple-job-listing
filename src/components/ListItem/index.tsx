import { Status, Tag } from "../../components";
import StyledListItem from "./index.styled";
import IItem from "../../types";
import { getTags, getStatus, getOptions } from "../../helper";

interface IListItemProps {
  data: IItem;
}

const ListItem: React.FC<IListItemProps> = ({ data }) => {
  const tags = getTags(data);
  const status = getStatus(data);
  const options = getOptions(data);

  return (
    <StyledListItem isFeatured={data.featured}>
      <img
        className="list-item__main__logo"
        src={data.logo}
        alt="company logo"
      />

      <div className="list-item__main__details">
        <div className="list-item__main__details__info">
          <div className="list-item__main__details__info__company">
            {data.company}
          </div>

          <div className="list-item__main__details__info__status">
            {status.map((state) => (
              <Status key={state} type={state} />
            ))}
          </div>
        </div>

        <div className="list-item__main__details__position">
          {data.position}
        </div>

        <div className="list-item__main__details__options">
          {options.map((option) => (
            <div
              key={option}
              className="list-item__main__details__options__option"
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className="list-item__tags">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </StyledListItem>
  );
};

export default ListItem;
