import React from "react";
import { Pet } from "./Pet";

export const PetList = ({ Animals }) => {
  const animalList =
    Animals &&
    Animals.map(pet => {
      return <Pet key={pet.id} pet={pet} />;
    });

  return <>{animalList}</>;
};
