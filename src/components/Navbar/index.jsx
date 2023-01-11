import "./Navbar.css";
import { AiFillHome, AiFillHeart, AiFillSetting } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const NavbarItem = ({ location, routePath, Icon, content }) => {
  const isActive = location.pathname === routePath;
  return (
    <Link to={routePath} style={{textDecoration: "none"}}>
      <div className={`navbar_item ${isActive ? "navbar_item_active" : ""}`}>
        <span className={isActive ? "navbar_icon_active" : ""}>
          <Icon size="2em" />
        </span>
        {content}
      </div>
    </Link>
  );
};

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { routePath: "/loved", content: "Loved", icon: AiFillHeart },
    { routePath: "/community", content: "Community", icon: BsFillPeopleFill },
    { routePath: "/", content: "Home", icon: AiFillHome },
    { routePath: "/profile", content: "Profile", icon: BsFillPersonFill },
    { routePath: "/settings", content: "Settings", icon: AiFillSetting },
  ];
  const excludedPath = ["/login"];
  return excludedPath.includes(location.pathname) ? (
    <></>
  ) : (
    <nav>
      {navItems.map((item) => (
        <NavbarItem
          location={location}
          key={item.content}
          Icon={item.icon}
          content={item.content}
          routePath={item.routePath}
        />
      ))}
    </nav>
  );
};

export default Navbar;
