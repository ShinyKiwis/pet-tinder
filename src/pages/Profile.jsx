import { Avatar, Header } from "../components";
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
  const friends = ["Sandy","Randy", "Alex", "Doki","Poki", "Titan", "John", "Anna", "Billy"];
  return (
    <main>
      <Header renderAvatar={false} />
      <div className="profile_container">
        <Avatar size="big" />
        <h1>Nguyen</h1>
        <div>
          <h2>Bio</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            eligendi atque repellendus quaerat, dolores quod voluptate
            reprehenderit perspiciatis laboriosam excepturi vel illum dolore
            recusandae sit ducimus, cupiditate at asperiores in.
          </p>
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
