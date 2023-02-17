import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Header, Message, Modal } from "../components";
import fetchData from "../helpers/fetchData";
import { AuthContext } from "../providers/AuthProvider";
import { ModalContext } from "../providers/ModalProvider";
import "../styles/Settings.css";

const Settings = () => {
  const fileButtonRef = useRef();
  const { user, saveUser, logout } = useContext(AuthContext);
  const { toggleModal, closeModal, message, showModal } =
    useContext(ModalContext);
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleUpdateBio = () => {
    if (bio) {
      saveUser({ ...user, bio: bio });
      // Show popup modal
      // Update back to server
      fetchData("https://pet-tinder-backend.onrender.com/api/update", {
        username: user.username,
        attribute: "bio",
        value: bio,
      });
      toggleModal("Bio updated!");
    } else {
      toggleModal("Please enter your new bio before updating it");
    }
  };

  const handleUpdateAvatar = (event) => {
    const file = event.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        const size = new Blob([reader.result]).size
        if(size <= 10000000){
          fetchData("https://pet-tinder-backend.onrender.com/api/update", {
            username: user.username,
            attribute: "avatar",
            value: reader.result,
          });
          saveUser({ ...user, avatar: reader.result });
        }else{
          toggleModal("Image too large!")
        }
      };
      reader.readAsDataURL(file);
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
        <Avatar imgSrc={user.avatar} size="big" />
        <h1>{user.username}</h1>
        <input
          onChange={handleUpdateAvatar}
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          hidden
          ref={fileButtonRef}
        />
        <button onClick={() => fileButtonRef.current.click()}>
          Update avatar
        </button>
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
