/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./PetCard.css";
import { useContext, useState } from "react";
import { BsGenderFemale, BsGenderMale, BsHeartFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";

const petIsLoved = (id, lovedPets) => {
  const lovedPet = lovedPets.filter((lovedPet) => lovedPet.id === id);
  return lovedPet.length === 1 ? true : false;
};

const PetCard = ({ id, imgSrc, name, gender, breed, age }) => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoved, setIsLoved] = useState(petIsLoved(id, user.loved));
  const handleLove = () => {
    const petInfo = {
      id: id,
      imgSrc: imgSrc,
      name: name,
      gender: gender,
      breed: breed,
      age: age,
    };
    if (!isLoved) {
      setUser({ ...user, loved: [...user.loved, petInfo] });
    } else {
      setUser({
        ...user,
        loved: user.loved.filter((lovedPet) => lovedPet.id !== id),
      });
    }
    setIsLoved(!isLoved);
  };
  return (
    <div className="petcard_container">
      <img src={imgSrc} alt="pet card" />
      <div className="petcard_info_container">
        <div className="petcard_info">
          <h4>{name}</h4>
          {gender === "Female" ? (
            <BsGenderFemale color="#FB7070" size="1.2em" />
          ) : (
            <BsGenderMale color="#8CB3ED" size="1.2em" />
          )}
        </div>
        <div className="petcard_info">
          <p>{breed}</p>-<p>{age}</p>
        </div>
      </div>
      <div
        className={`petcard_love_btn ${
          isLoved ? "petcard_love_active" : "petcard_love_inactive"
        }`}
        onClick={handleLove}
      >
        <BsHeartFill size="1.5em" />
      </div>
    </div>
  );
};

export default PetCard;
