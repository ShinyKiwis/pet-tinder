import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();

  return user ? <div>Home</div> : <Navigate to="/login" />;
};

export default Home;
