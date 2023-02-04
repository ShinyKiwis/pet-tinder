/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Header } from "../components";
import { AuthContext } from "../providers/AuthProvider";
import "../styles/Profile.css";

const FriendAvatar = ({ id, name, imgSrc }) => {
  const navigate = useNavigate();
  return (
    <div className="friend_avatar" onClick={() => navigate("/adoption/" + id)}>
      <Avatar size="big" imgSrc={imgSrc} />
      <span>{name}</span>
    </div>
  );
};

const Profile = () => {
  const { user } = useContext(AuthContext);
  const friends = user.adopted;
  return (
    <main>
      <Header renderAvatar={false} />
      <div className="profile_container">
        <Avatar size="big" />
        <h1>{user.username}</h1>
        <div>
          <h2>Bio</h2>
          <p>{user.bio}</p>
          <h2>Friend with</h2>
          <div className="friends_container">
            {friends.map((friend) => (
              <FriendAvatar
                key={friend.id}
                id={friend.id}
                name={friend.name}
                imgSrc={friend.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
