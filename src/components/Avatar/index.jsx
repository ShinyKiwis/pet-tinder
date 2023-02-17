/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import "./Avatar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Avatar = ({ imgSrc, size, className }) => {
  const {user} = useContext(AuthContext)
  const imgData = imgSrc ? imgSrc: user.avatar
  const navigate = useNavigate();
  return (
    <img
      className={`${size} avatar ${className}`}
      src={imgData ? imgData : "pet_logo.svg"}
      alt="user avatar"
      onClick={() => navigate("/profile")}
    />
  );
};

export default Avatar;
