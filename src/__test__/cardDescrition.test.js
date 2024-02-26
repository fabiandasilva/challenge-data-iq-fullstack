/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import CardDescription from "../components/CardDescription";
import userDetail from "./mock/mockDetail";
test("CardDescription se renderiza correctamente", () => {
  const { asFragment } = render(<CardDescription userDetail={userDetail} />);

  expect(asFragment()).toMatchSnapshot();
});
