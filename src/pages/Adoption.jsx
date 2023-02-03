import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { FeatureImage } from "../components";
import fetchPetByID from "../helpers/fetchPetByID";

const Adoption = () => {
  const { petID } = useParams();
  const { data: pet } = useQuery([`pet:${petID}`, petID], fetchPetByID);

  return (
    <div>
      <FeatureImage
        imgSrc={
          pet.photos.length
            ? pet.photos[0].medium
            : "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg"
        }
      />
    </div>
  );
};

export default Adoption;
