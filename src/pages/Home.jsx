import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";
import { Header, PetCard, SearchBar } from "../components";
import "../styles/Home.css";
import { useQuery } from "react-query";
import fetchPet from "../helpers/fetchPet";

const Home = () => {
  const { user } = useAuth();
  const results = useQuery(["pet-list", undefined, undefined], fetchPet);
  const petList = results.data;
  return user ? (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      {results.isLoading ? (
        <h3>Loading pet list</h3>
      ) : (
        <>
          <h3>Your new friends await!</h3>
          <div className="pets_container">
            {petList.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                imgSrc={
                  pet.photos.length
                    ? pet.photos[0].medium
                    : "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg"
                }
                name={pet.name}
                gender={pet.gender}
                breed={pet.breeds.primary}
                age={pet.age}
              />
            ))}
          </div>
        </>
      )}
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
