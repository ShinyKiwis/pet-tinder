/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img src="logo.svg" alt="pet tinder logo" onClick={() => navigate("/")} />
  );
};

export default Logo;
