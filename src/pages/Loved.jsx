import React, { useContext } from "react";
import { Header, SearchBar, PetCard } from "../components";
import { AuthContext } from "../providers/AuthProvider";

const Loved = () => {
  const { user } = useContext(AuthContext);
  const lovedPets = user.loved;
  return (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      <h3>You loved them!</h3>
      <div className="pets_container">
        {lovedPets.map((pet) => (
          <PetCard
            key={pet.id}
            id={pet.id}
            imgSrc={pet.imgSrc}
            name={pet.name}
            gender={pet.gender}
            breed={pet.breed}
            age={pet.age}
          />
        ))}
      </div>
    </main>
  );
};

export default Loved;
