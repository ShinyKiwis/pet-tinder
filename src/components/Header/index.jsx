import Avatar from "../Avatar";
import Logo from "../Logo";
import Navbar from "../Navbar";
import "./Header.css";

const Header = ({ renderAvatar }) => {
  return (
    <header>
      <Logo />
      <div className="header_navbar">
        <Navbar />
        {renderAvatar && <Avatar size="small" className="hide"/>}
      </div>
    </header>
  );
};

export default Header;
