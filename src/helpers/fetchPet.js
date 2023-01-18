import axios from "axios";

const fetchPet = async ({ queryKey }) => {
  const type = queryKey[1];
  const page = queryKey[2];
  const { data: response } = await axios.get("http://localhost:3600/api/pets", {
    params: {
      type: type,
      page: page,
    },
  });
  return response;
};

export default fetchPet;
