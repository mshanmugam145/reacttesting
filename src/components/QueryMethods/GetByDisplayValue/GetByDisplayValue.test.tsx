import { render, screen } from "@testing-library/react";
import GetByDisplayValue from "./GetByDisplayValue";

describe('GetByDisplayValue', () => {
    test('renders correctly', () => {
       render(<GetByDisplayValue />)

       const nameElement = screen.getByDisplayValue("shan")
       expect(nameElement).toBeInTheDocument();
      
    });
});