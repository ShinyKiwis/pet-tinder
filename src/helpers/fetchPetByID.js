import axios from "axios";

const fetchPetByID = async ({ queryKey }) => {
  const petID = queryKey[1];
  const { data: animal } = await axios.get(
    "https://pet-tinder-backend.onrender.com/api/pet/" + petID
  );
  return animal;
};

export default fetchPetByID;
