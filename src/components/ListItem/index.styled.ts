import styled from "styled-components";

interface IStyledListItemProps {
  isFeatured: boolean;
}

const StyledListItem = styled.div<IStyledListItemProps>`
  display: flex;
  position: relative;
  margin-bottom: 2rem;
  padding: 2.5rem;
  border-radius: 5px;
  border-left: 5px solid
    ${(props) => (props.isFeatured ? "hsl(180, 29%, 50%)" : "transparent")};
  -webkit-box-shadow: 4px 12px 34px -18px hsl(180, 29%, 50%);
  -moz-box-shadow: 4px 12px 34px -18px hsl(180, 29%, 50%);
  box-shadow: 4px 12px 34px -18px hsl(180, 29%, 50%);
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
    -moz-box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
    box-shadow: 4px 12px 34px -10px hsl(180, 29%, 50%);
  }

  .list-item {
    &__main {
      &__logo {
        width: 88px;
        height: 88px;
        margin-right: 2rem;

        @media only screen and (max-width: 964px) {
          position: absolute;
          top: 0;
          left: 1.5rem;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
        }
      }

      &__details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        &__info {
          display: flex;
          align-items: center;

          &__company {
            font-size: 15px;
            color: hsl(180, 29%, 50%);
            font-weight: 700;
          }

          &__status {
            display: flex;

            div {
              &:nth-child(1) {
                margin-left: 1rem;
                margin-right: 0.5rem;
              }
            }
          }

          @media only screen and (max-width: 964px) {
            margin-top: 0.5rem;
            margin-bottom: 1rem;
          }
        }

        &__position {
          font-weight: 700;
          font-size: 17px;
          color: hsl(180, 14%, 20%);
          transition: all 0.3s;

          &:hover {
            color: hsl(180, 29%, 50%);
          }

          @media only screen and (max-width: 964px) {
            margin-bottom: 1rem;
          }
        }

        &__options {
          display: flex;
          align-items: center;

          &__option {
            display: flex;
            font-size: 15px;
            font-weight: 500;
            color: hsl(180, 8%, 52%);

            &::after {
              align-self: center;
              content: "";
              width: 4px;
              height: 4px;
              border-radius: 4px;
              margin-left: 1rem;
              margin-right: 1rem;
              background-color: hsl(180, 8%, 52%);
            }

            &:last-child {
              &::after {
                display: none;
              }
            }

            @media only screen and (max-width: 964px) {
              margin-bottom: 0.5rem;
              font-size: 13px;
            }
          }

          @media only screen and (max-width: 964px) {
            margin-bottom: 1rem;
          }
        }
      }
    }

    &__tags {
      display: flex;
      align-self: center;
      margin-left: auto;
      flex-wrap: wrap;

      div {
        margin: 0.5rem;

        @media only screen and (max-width: 964px) {
          margin: 0 0.5rem 0.5rem 0;
        }
      }

      @media only screen and (max-width: 964px) {
        border-top: 1px solid hsl(180, 8%, 52%);
        padding-top: 1rem;
      }
    }
  }

  @media only screen and (max-width: 964px) {
    display: block;
    padding: 1.5rem;
    margin-bottom: 2.5rem;
  }
`;

export default StyledListItem;
