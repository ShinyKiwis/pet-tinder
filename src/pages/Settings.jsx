import { Avatar, Header } from "../components";
import "../styles/Settings.css";

const Settings = () => {
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
          <button>Logout</button>
        </div>
      </div>
    </main>
  );
};

export default Settings;
