import React from 'react';
import { Pet } from './Pet';

export const PetList = (props) => {

  const animalList=	props.Animals.map(pet => {
      return <Pet key={pet.id} pet={pet} />
    })

 	return (
 		<div>
 		{animalList}
 		</div>
   )
}
