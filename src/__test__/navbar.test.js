/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import Navbar from "../components/NavBar";

test("Navbar se renderiza correctamente", () => {
  const { asFragment } = render(<Navbar />);
  expect(asFragment()).toMatchSnapshot();
});
