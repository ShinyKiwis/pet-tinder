import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Header, Message, Modal } from "../components";
import fetchData from "../helpers/fetchData";
import { AuthContext } from "../providers/AuthProvider";
import { ModalContext } from "../providers/ModalProvider";
import "../styles/Settings.css";

const Settings = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const { toggleModal, closeModal, message, showModal } =
    useContext(ModalContext);
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleUpdateBio = () => {
    if (bio) {
      setUser({ ...user, bio: bio });
      // Show popup modal
      // Update back to server
      fetchData("http://localhost:3600/api/update", {
        username: user.username,
        attribute: "bio",
        value: bio,
      });
      toggleModal("Bio updated!");
    } else {
      toggleModal("Please enter your new bio before updating it");
    }
  };

  const handleUpdateAvatar = () => {
    if (user.adopted.length == 0) {
      toggleModal("Please adopt a pet to change your default avatar");
    }
  };

  return (
    <main>
      {showModal && (
        <Modal>
          <Message message={message} onClose={closeModal} />
        </Modal>
      )}
      <Header renderAvatar={false} />
      <div className="settings_container">
        <Avatar size="big" />
        <h1>{user.username}</h1>
        <button onClick={handleUpdateAvatar}>Update avatar</button>
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
