import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Header } from "../components";
import { AuthContext } from "../providers/AuthProvider";
import "../styles/Settings.css";

const Settings = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <main>
      <Header renderAvatar={false} />
      <div className="settings_container">
        <Avatar size="big" />
        <h1>Nguyen</h1>
        <button>Upload avatar</button>
        <div className="bio_container">
          <h2>Bio</h2>
          <textarea placeholder="lorem jaskjdjalksdj lkjalksjd kljaklsjd ljaklsjd kljaksljdl kjalks d"></textarea>
        </div>
        <div className="settings_actions">
          <button>Update Bio</button>
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
