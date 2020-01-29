import React from "react";
import { shallow } from "enzyme";
import { RetrievePetsForm } from "../RetrievePetsForm";

it("expect RetrievePetsForm to render", () => {
  expect(shallow(<RetrievePetsForm />).length).toEqual(1);
});
