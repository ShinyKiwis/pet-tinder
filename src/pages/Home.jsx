import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { Header, PetCard } from "../components";
import { BsSearch } from "react-icons/bs";
import "../styles/Home.css";

const SearchBar = () => {
  return (
    <div className="searchbar_container">
      <BsSearch className="searchbar_icon" size="1.5em" />
      <input type="text" placeholder="Search pet..." />
    </div>
  );
};

const Home = () => {
  const { user } = useAuth();

  return user ? (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      <h3>Your new friends await!</h3>
      <div className="pets_container">
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
        <PetCard
          imgSrc="/images/feature-image-1.jpg"
          name="Titan"
          gender="M"
          breed="Norwey"
          age="3 years"
        />
      </div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
