import axios from "axios";

const fetchPetByID = async ({ queryKey }) => {
  const petID = queryKey[1];
  const { data: animal } = await axios.get(
    "http://localhost:3600/api/pet/" + petID
  );
  return animal;
};

export default fetchPetByID;
