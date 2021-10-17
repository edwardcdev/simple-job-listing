import styled from "styled-components";

interface IStyledFilterProps {
  hasFilters: boolean;
}

const StyledFilter = styled.div<IStyledFilterProps>`
  width: 100%;
  max-width: 1440px;
  position: absolute;
  top: 0;
  z-index: 9999;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
  -moz-box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
  box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
  transition: all 0.8s;
  max-height: ${(props) => (props.hasFilters ? "300px" : "0px")};

  .filter {
    display: flex;
    align-items: center;
    padding: 1rem 2.5rem;

    &__items {
      display: flex;
      flex-wrap: wrap;

      & > div {
        margin-right: 0.5rem;

        @media only screen and (max-width: 964px) {
          margin-bottom: 0.5rem;
        }
      }

      @media only screen and (max-width: 964px) {
        margin-bottom: -0.5rem;
      }
    }

    &__clear {
      margin-left: auto;
      color: hsl(180, 8%, 52%);
      font-size: 15px;
      font-weight: 700;
      transition: all 0.3s;

      &:hover {
        color: hsl(180, 29%, 50%);
        cursor: pointer;
        text-decoration: underline;
      }
    }

    @media only screen and (max-width: 964px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`;

export default StyledFilter;
