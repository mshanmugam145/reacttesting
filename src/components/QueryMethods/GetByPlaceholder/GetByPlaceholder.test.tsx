import { render, screen } from "@testing-library/react";
import GetByPlaceholder from "./GetByPlaceholder";

describe('GetByPlaceholder', () => {
    test('renders correctly', () => {
       render(<GetByPlaceholder />)

       const nameElement = screen.getByPlaceholderText("Full Name")
       expect(nameElement).toBeInTheDocument();
      
    });
});