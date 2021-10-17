import StyledHeader from "./index.styled";
import HeaderDesktopIMG from "../../assets/images/bg-header-desktop.svg";
import HeaderMobileIMG from "../../assets/images/bg-header-mobile.svg";

const Header = () => {
  return (
    <StyledHeader
      desktop={HeaderDesktopIMG}
      mobile={HeaderMobileIMG}
    ></StyledHeader>
  );
};

export default Header;
