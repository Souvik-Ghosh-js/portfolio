import NavLinks from "./NavLinks";
import logo from "../images/Sg (2).png";

const Header = () => {
  return (
    <header className="header"><a href="../components/PageHeader.jslanding.js">
      <img className="logo" src={logo} alt="Souvik Ghosh' Logo" /></a>
      <NavLinks />
    </header>
  );
};

export default Header;
