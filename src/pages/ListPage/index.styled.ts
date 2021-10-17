import styled from "styled-components";

const StyledListPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .list-page {
    background-color: hsl(180, 52%, 96%);
    flex: 1;

    &__container {
      position: relative;
      margin-left: auto;
      margin-right: auto;
      max-width: 1440px;
      width: 90%;
      padding-top: 5rem;
      padding-bottom: 3rem;
    }
  }
`;

export default StyledListPage;
