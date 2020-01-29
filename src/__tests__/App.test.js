import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";

it("should render a PetList", () => {
  const mockPets = [
    {
      id: 45262286,
      organization_id: "CA216",
      url:
        "https://www.petfinder.com/dog/marta-45262286/ca/riverside/mary-s-roberts-pet-adoption-center-ca216/?referrer_id=3d19601b-bfbd-46a9-996a-60c4ce5f6448",
      type: "Dog",
      species: "Dog",
      breeds: {
        primary: "Mixed Breed",
        secondary: null,
        mixed: false,
        unknown: false
      },
      colors: {
        primary: null,
        secondary: null,
        tertiary: null
      }
    },
    {
      id: 45262286,
      organization_id: "CA216",
      url:
        "https://www.petfinder.com/dog/marta-45262286/ca/riverside/mary-s-roberts-pet-adoption-center-ca216/?referrer_id=3d19601b-bfbd-46a9-996a-60c4ce5f6448",
      type: "Dog",
      species: "Dog",
      breeds: {
        primary: "Mixed Breed",
        secondary: null,
        mixed: false,
        unknown: false
      },
      colors: {
        primary: null,
        secondary: null,
        tertiary: null
      }
    }
  ];
  expect(shallow(<App pets={mockPets} />)).toMatchSnapshot();
});
