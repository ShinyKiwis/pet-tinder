import React, { useContext } from "react";
import { Header, PetCard } from "../components";
import { AuthContext } from "../providers/AuthProvider";

const Loved = () => {
  const { user } = useContext(AuthContext);
  const lovedPets = user.loved;
  return (
    <main>
      <Header renderAvatar={true} />
      <h3>You loved them!</h3>
      <div className="pets_container">
        <div className="pets_container_scroller">
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
      </div>
    </main>
  );
};

export default Loved;
