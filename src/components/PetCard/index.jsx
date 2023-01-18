/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./PetCard.css";
import { useState } from "react";
import { BsGenderFemale, BsGenderMale, BsHeartFill } from "react-icons/bs";

const PetCard = ({ imgSrc, name, gender, breed, age }) => {
  const [isLoved, setIsLoved] = useState(false);

  const handleLove = () => {
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
