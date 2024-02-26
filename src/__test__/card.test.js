/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import Card from "../components/Card";
import user from "./mock/mockUser";

test("Card se renderiza correctamente", () => {
  const { asFragment } = render(<Card user={user} />);

  expect(asFragment()).toMatchSnapshot();
});
