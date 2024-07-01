import { render, screen } from "@testing-library/react";
import ContactUs from "../../components/ContactUs";
import "@testing-library/jest-dom"

describe("ContactUs", () => {
  test('should load header', () => {
    render(<ContactUs/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  })

  it('should load button', () => {
    render(<ContactUs/>);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  })

  it('should have text input with place holder as Name', () => {
    render(<ContactUs/>);
    const txtInput = screen.getByPlaceholderText("Name");
    expect(txtInput).toBeInTheDocument();
  })

  it('should load 2 text inputs', () => {
    render(<ContactUs/>);
    const txtInputs = screen.getAllByRole("textbox");
    expect(txtInputs.length).toBe(2);
  })
});