import { useContext } from "react";
import { Avatar, Header } from "../components";
import { AuthContext } from "../providers/AuthProvider";
import "../styles/Profile.css";

const FriendAvatar = ({ name }) => {
  return (
    <div className="friend_avatar">
      <Avatar size="big" />
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
              <FriendAvatar key={friend} name={friend} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
