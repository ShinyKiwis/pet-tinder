import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Header } from "../components";
import fetchData from "../helpers/fetchData";
import { AuthContext } from "../providers/AuthProvider";
import "../styles/Settings.css";

const Settings = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleUpdateBio = () => {
    if(bio){
      setUser({...user, bio: bio})
      // Show popup modal
      // Update back to server
      fetchData("http://localhost:3600/api/update", {
        username: user.username,
        attribute: "bio",
        value: bio
      })
    }
  }

  return (
    <main>
      <Header renderAvatar={false} />
      <div className="settings_container">
        <Avatar size="big" />
        <h1>{user.username}</h1>
        <button>Update avatar</button>
        <div className="bio_container">
          <h2>Bio</h2>
          <textarea
            onChange={(e) => setBio(e.target.value)}
            placeholder={user.bio ? user.bio : "Update your bio now"}
          ></textarea>
        </div>
        <div className="settings_actions">
          <button onClick={handleUpdateBio}>Update Bio</button>
          <button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
