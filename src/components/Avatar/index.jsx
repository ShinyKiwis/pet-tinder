/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Avatar.css";
import { useNavigate } from "react-router-dom";

const Avatar = ({ imgSrc, size }) => {
  const navigate = useNavigate();
  return (
    <img
      className={`${size} avatar`}
      src={imgSrc ? imgSrc : "vite.svg"}
      alt="user avatar"
      onClick={() => navigate("/profile")}
    />
  );
};

export default Avatar;
