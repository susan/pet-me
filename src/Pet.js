import React from "react";

export const Pet = ({ pet }) => {
  console.log(pet);
  return (
    <div className="pet">
      {pet.photos.length > 0 && (
        <img className="image-container" src={pet.photos[0]["small"]} alt="" />
      )}
      <h2> A pet for you! </h2>
      <h4> name: {pet.name} </h4>
      <h4> age: {pet.age} </h4>
      <h4> gender: {pet.gender} </h4>
      <h4> breed: {pet.breeds.primary} </h4>
      <h4>
        city: {pet.contact.address.city}, {pet.contact.address.state}
      </h4>
    </div>
  );
};
