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
            {petList.map((pet) => {
              if (pet.photos.length !== 0) {
                return (
                  <PetCard
                    key={pet.id}
                    imgSrc={pet.photos[0].medium}
                    name={pet.name}
                    gender={pet.gender}
                    breed={pet.breeds.primary}
                    age={pet.age}
                  />
                );
              } else {
                return <div></div>;
              }
            })}
          </div>
        </>
      )}
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
