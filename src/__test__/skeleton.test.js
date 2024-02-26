/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import React from "react";
import Skeleton from "../components/Skeleton";

test("Skeleton se renderiza correctamente", () => {
  const { asFragment } = render(<Skeleton />);
  expect(asFragment()).toMatchSnapshot();
});
