import { useAuth } from "../hooks";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Header, PetCard, SearchBar } from "../components";
import "../styles/Home.css";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import fetchPet from "../helpers/fetchPet";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();
  const results = useInfiniteQuery(["pet-list"], fetchPet, {
    // eslint-disable-next-line no-unused-vars
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    },
  });

  if (results.isError) {
    return <h3>Error</h3>;
  } else if (results.isLoading) {
    return user ? (
      <main>
        {/* <Header renderAvatar={true} /> */}
        {/* <SearchBar /> */}
        <h3>Loading fluffy friends for you</h3>
      </main>
    ) : (
      <Navigate to="/login" />
    );
  }
  // console.log(results.data);
  const petList = results.data.pages;
  return user ? (
    <main>
      <Header renderAvatar={true} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <h3>Your new friends await!</h3>
      <div id="pets_scroller" className="pets_container">
        <InfiniteScroll
          dataLength={petList.length * 20}
          hasMore={results.hasNextPage}
          next={results.fetchNextPage}
          className="pets_container_scroller"
          scrollableTarget="pets_scroller"
          scrollThreshold={0.95}
        >
          {petList.map((page) =>
            page.response
              .filter((pet) =>
                searchTerm != ""
                  ? pet.type.toLowerCase() == searchTerm.toLowerCase()
                  : pet
              )
              .map((pet) => (
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
              ))
          )}
        </InfiniteScroll>
      </div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
