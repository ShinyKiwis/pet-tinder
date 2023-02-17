import axios from "axios";

const fetchPet = async ({ pageParam = 1 }) => {
  const { data: response } = await axios.get("https://pet-tinder-backend.onrender.com/api/pets", {
    params: {
      // type: type,
      page: pageParam,
    },
  });
  return {response, nextPage:pageParam +1, totalPages: 50};
};

export default fetchPet;
