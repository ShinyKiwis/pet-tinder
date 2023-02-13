import axios from "axios";

const fetchPet = async ({ pageParam = 1 }) => {
  const { data: response } = await axios.get("http://localhost:3600/api/pets", {
    params: {
      // type: type,
      page: pageParam,
    },
  });
  return {response, nextPage:pageParam +1, totalPages: 50};
};

export default fetchPet;
