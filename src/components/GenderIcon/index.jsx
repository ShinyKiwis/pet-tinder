import { BsGenderFemale, BsGenderMale } from "react-icons/bs";

const getGenderIcon = ({ gender, size = "1.2em" }) => {
  return gender === "Female" ? (
    <BsGenderFemale color="#FB7070" size={size} />
  ) : (
    <BsGenderMale color="#8CB3ED" size={size} />
  );
};

export default getGenderIcon;
