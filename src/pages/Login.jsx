import { Button, FeatureImage, Logo, TextBox } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const numberOfImages = 5;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    console.log(username);
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    console.log(password);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log("Here");
    navigate("/");
  };

  return (
    <>
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
          onChange={onChangeUsername}
        />
        <TextBox
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
        <Button content="Sign in" isPrimary={true} onClick={handleLogin} />
        <Button content="Register" isPrimary={false} />
      </div>
    </>
  );
};

export default Login;
