import {
  Button,
  FeatureImage,
  Logo,
  TextBox,
  Modal,
  Message,
} from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "../styles/Login.css";
import fetchData from "../helpers/fetchData";
import { useModal } from "../hooks";

const Login = () => {
  const numberOfImages = 5;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { toggleModal, showModal, closeModal, message } = useModal()

  const handleLogin = () => {
    if (username && password) {
      fetchData("http://localhost:3600/api/login", {
        username: username,
        password: password,
      }).then((data) => {
        if (data.ERROR) {
          // Render a popup modal
          toggleModal(data.ERROR);
        } else if (password === data.password) {
          login(data);
          navigate("/");
        } else {
          toggleModal("Invalid Credentials");
        }
      });
    } else {
      toggleModal("Please enter username and password to proceed");
    }
  };

  const handleRegister = () => {
    if (username && password) {
      fetchData("http://localhost:3600/api/register", {
        username: username,
        password: password,
      });
    } else {
      toggleModal("Please enter username and password to register");
    }
  };

  return (
    <>
      {showModal && (
        <Modal>
          <Message message={message} onClose={closeModal} />
        </Modal>
      )}
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
      >
        {Array.from(Array(numberOfImages).keys()).map((idx) => (
          <FeatureImage
            key={`feature-image-${idx}`}
            imgSrc={`/images/feature-image-${idx + 1}.jpg`}
          />
        ))}
      </Carousel>
      <div className="logo_container">
        <Logo />
      </div>
      <div className="user_section">
        <TextBox
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextBox
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button content="Sign in" isPrimary={true} onClick={handleLogin} />
        <Button content="Register" isPrimary={false} onClick={handleRegister} />
      </div>
    </>
  );
};

export default Login;
