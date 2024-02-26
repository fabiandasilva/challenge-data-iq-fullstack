/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import Footer from "../components/Footer";

test("Footer se renderiza correctamente", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
