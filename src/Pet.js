import React from "react";

export const Pet = ({ pet }) => {
  return (
    <div className="pet">
      {pet.photos.length > 0 && (
        <img className="image-container" src={pet.photos[0]["small"]} alt="" />
      )}
      <h2> A pet for you! </h2>
      <h4> name: {pet.name} </h4>
      <h4> age: {pet.age} </h4>
      <h4> gender: {pet.gender} </h4>
    </div>
  );
};
