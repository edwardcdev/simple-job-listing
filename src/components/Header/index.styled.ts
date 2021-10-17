import styled from "styled-components";

interface IStyledHeaderProps {
  desktop: string;
  mobile: string;
}

const StyledHeader = styled.div<IStyledHeaderProps>`
  width: 100%;
  height: 200px;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${(props) => props.desktop});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 375px) {
    height: 150px;
    background-image: url(${(props) => props.mobile});
  }
`;

export default StyledHeader;
