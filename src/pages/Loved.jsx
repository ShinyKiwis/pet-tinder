import React, { useContext } from "react";
import { Header, SearchBar, PetCard } from "../components";
import { AuthContext } from "../providers/AuthProvider";

const Loved = () => {
  const {user} = useContext(AuthContext)
  return (
    <main>
      <Header renderAvatar={true} />
      <SearchBar />
      <h3>You loved them!</h3>
      <div className="pets_container">
      </div>
    </main>
  );
};

export default Loved;
