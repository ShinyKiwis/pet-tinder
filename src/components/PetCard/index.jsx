/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "./PetCard.css";
import { useContext, useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { AuthContext } from "../../providers/AuthProvider";
import fetchData from "../../helpers/fetchData";
import { useNavigate } from "react-router-dom";
import { GenderIcon } from "..";

const petIsLoved = (id, lovedPets) => {
  const lovedPet = lovedPets.filter((lovedPet) => lovedPet.id == id);
  return lovedPet.length === 1 ? true : false;
};

const PetCard = ({ id, imgSrc, name, gender, breed, age }) => {
  const navigate = useNavigate();
  const { user, setUser, saveUser } = useContext(AuthContext);
  const [isLoved, setIsLoved] = useState(petIsLoved(id, user.loved));
  const [toggleFetch, setToggleFetch] = useState(false);
  const handleLove = () => {
    setToggleFetch(true)
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

  useEffect(() => {
    if (toggleFetch) {
      fetchData("http://localhost:3600/api/update", {
        username: user.username,
        attribute: "loved",
        value: user.loved,
      });
      saveUser(user);
      setToggleFetch(false)
    }
  }, [user]);

  return (
    <div className="petcard_container">
      <img
        src={imgSrc}
        alt="pet card"
        onClick={() => navigate(`/adoption/${id}`)}
      />
      <div className="petcard_info_container">
        <div className="petcard_info">
          <h4>{name}</h4>
          <GenderIcon gender={gender} />
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
