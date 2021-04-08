import React from "react";
import { render, screen } from "@testing-library/react";
import TotalPrice from "../TotalPrice";

describe("test TotalPrice component", () => {
  it("component should render correct income & outcome number", () => {
    render(<TotalPrice income={1000} outcome={2000} />);
    const incomeElement = screen.getByText(/income:1000/i);
    const outcomeElement = screen.getByText(/outcome:2000/i);
    expect(incomeElement).toBeInTheDocument();
    expect(outcomeElement).toBeInTheDocument();
  });
});
