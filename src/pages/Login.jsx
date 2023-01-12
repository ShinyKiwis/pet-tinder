import { Button, FeatureImage, Logo, TextBox } from "../components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/Login.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const numberOfImages = 5;
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const authUser = async (url, data) => {
    const user = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return user.json();
  };

  const handleLogin = () => {
    authUser("http://localhost:3600/api/login", {
      username: username,
      password: password,
    }).then((data) => {
      if (password === data.password) {
        login(data);
        navigate("/");
      } else {
        // Render a popup modal
        console.log(false);
      }
    });
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextBox
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button content="Sign in" isPrimary={true} onClick={handleLogin} />
        <Button content="Register" isPrimary={false} />
      </div>
    </>
  );
};

export default Login;
