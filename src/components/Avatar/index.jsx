import "./Avatar.css";
const Avatar = ({ size }) => {
  return (
    <img
      className={`${size} avatar`}
      src="/images/avatar.jpg"
      alt="user avatar"
    />
  );
};

export default Avatar;
