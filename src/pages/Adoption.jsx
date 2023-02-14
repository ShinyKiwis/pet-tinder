/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ModalContext } from "../providers/ModalProvider";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Button,
  FeatureImage,
  GenderIcon,
  Message,
  Modal,
} from "../components";
import { BsHeartFill } from "react-icons/bs";
import fetchPetByID from "../helpers/fetchPetByID";
import fetchData from "../helpers/fetchData";
import "../styles/Adoption.css";

const PetInfoBox = ({ title, value }) => {
  return (
    <div className="pet_info_box">
      <h4>{title}</h4>
      <h4>{value}</h4>
    </div>
  );
};

const petIsLoved = (id, lovedPets) => {
  const lovedPet = lovedPets.filter((lovedPet) => lovedPet.id == id);
  return lovedPet.length === 1 ? true : false;
};

const petIsAdopted = (id, adoptedPets) => {
  const adoptedPet = adoptedPets.filter((adoptedPet) => adoptedPet.id === id);
  return adoptedPet.length === 1 ? true : false;
};

const Adoption = () => {
  const { petID } = useParams();
  const { data: pet, isLoading } = useQuery(
    [`pet:${petID}`, petID],
    fetchPetByID
  );
  const { user, setUser, saveUser } = useContext(AuthContext);
  const [attribute, setAttribute] = useState("");
  const [isLoved, setIsLoved] = useState(petIsLoved(petID, user.loved));
  const { toggleModal, closeModal, message, showModal } =
    useContext(ModalContext);
  const handleLove = () => {
    const petInfo = {
      id: petID,
      imgSrc: pet.photos.length
        ? pet.photos[0].medium
        : "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg",
      name: pet.name,
      gender: pet.gender,
      breed: pet.breeds.primary,
      age: pet.age,
    };
    if (!isLoved) {
      setUser({ ...user, loved: [...user.loved, petInfo] });
    } else {
      setUser({
        ...user,
        loved: user.loved.filter((lovedPet) => lovedPet.id !== petID),
      });
    }
    setIsLoved(!isLoved);
    setAttribute("loved");
  };

  const handleAdoption = () => {
    const petInfo = {
      id: petID,
      imgSrc: pet.photos.length
        ? pet.photos[0].medium
        : "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg",
      name: pet.name,
      gender: pet.gender,
      breed: pet.breeds.primary,
      age: pet.age,
    };
    setAttribute("adopted");
    setUser({ ...user, adopted: [...user.adopted, petInfo] });
    toggleModal("You adopted " + pet.name);
  };
  useEffect(() => {
    if (attribute !== "") {
      fetchData("http://localhost:3600/api/update", {
        username: user.username,
        attribute: attribute,
        value: user[attribute],
      });
      saveUser(user);
    }
  }, [user]);

  const handleRelease = () => {
    setAttribute("adopted");
    setUser({
      ...user,
      adopted: user.adopted.filter((adoptedPet) => adoptedPet.id !== petID),
    });
    toggleModal("You are no longer friend with " + pet.name);
  };

  return isLoading ? (
    <h3>Loading Pet Info</h3>
  ) : (
    <div className="adoption_container">
      {showModal && (
        <Modal>
          <Message message={message} onClose={closeModal} />
        </Modal>
      )}
      <FeatureImage
        imgSrc={
          pet.photos.length
            ? pet.photos[0].medium
            : "https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg"
        }
      />
      <div className="adoption_info_container">
        <div className="adoption_name">
          <h2>{pet.name}</h2>
          <GenderIcon gender={pet.gender} size="1.5em" />
          <div
            className={`adoption_love_icon ${
              isLoved ? "adoption_love_icon_primary" : ""
            }`}
            onClick={() => handleLove()}
          >
            <BsHeartFill size="1.8em" />
          </div>
        </div>
        <h3>{pet.breeds.primary}</h3>
        <div className="pet_info_container">
          <PetInfoBox title={"Type"} value={pet.type} />
          <PetInfoBox title={"Age"} value={pet.age} />
          <PetInfoBox title={"Size"} value={pet.size} />
          <PetInfoBox title={"Status"} value={pet.status} />
        </div>
        <p>{pet.description}</p>
        <Button
          isPrimary={true}
          content={petIsAdopted(petID, user.adopted) ? "Unfriend :(" : "Adoption Now"}
          onClick={petIsAdopted(petID, user.adopted) ? handleRelease : handleAdoption}
        />
      </div>
    </div>
  );
};

export default Adoption;
