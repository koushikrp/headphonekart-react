import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Unit-Shop/i);
  const linkElement = screen.getByText(/HeadphoneKart/i);
  expect(linkElement).toBeInTheDocument();
});