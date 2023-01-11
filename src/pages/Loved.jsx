import React from "react";
import { Header, SearchBar, PetCard } from "../components";

const Loved = () => {
  return (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      <h3>You loved them!</h3>
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
      </div>
    </main>
  );
};

export default Loved;
