import styled from "styled-components";

const StyledFilterItem = styled.div`
  display: flex;

  .filter-item {
    &__tag {
      border-radius: 4px 0px 0px 4px;
      color: hsl(180, 29%, 50%);
      font-size: 12px;
      line-height: 12px;
      font-weight: 700;
      padding: 0.8em 0.8em 0.6em 0.8em;
      background-color: hsl(180, 29%, 90%);
    }

    &__remove {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: hsl(180, 29%, 50%);
      border-radius: 0px 4px 4px 0px;
      width: 30px;
      transition: all 0.3s;

      &:hover {
        background-color: hsl(180, 14%, 20%);
        cursor: pointer;
      }
    }
  }
`;

export default StyledFilterItem;
