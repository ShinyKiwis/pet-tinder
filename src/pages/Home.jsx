import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { Header } from "../components";
import "../styles/Home.css"

const Home = () => {
  const { user } = useAuth();

  return user ? (
    <main>
      <Header renderAvatar={true} />
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
