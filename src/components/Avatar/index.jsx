/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Avatar.css";
import { useNavigate } from "react-router-dom";

const Avatar = ({ size }) => {
  const navigate = useNavigate();
  return (
    <img
      className={`${size} avatar`}
      src="/images/avatar.jpg"
      alt="user avatar"
      onClick={() => navigate("/profile")}
    />
  );
};

export default Avatar;
