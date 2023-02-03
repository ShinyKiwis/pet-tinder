import axios from "axios";

const fetchPetByID = async ({ queryKey }) => {
  const petID = queryKey[1];
  console.log(petID)
  const { data: animal } = await axios.get(
    "http://localhost:3600/api/pet/" + petID
  );
  console.log(animal)
  return animal;
};

export default fetchPetByID;
