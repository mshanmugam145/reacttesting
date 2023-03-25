import { render, screen } from "@testing-library/react";
import GetByText from "./GetByText";

describe('GetByText', () => {
    test('renders correctly', () => {
       render(<GetByText />)

       const paraElement = screen.getByText("All Fields Mandatory")
       expect(paraElement).toBeInTheDocument();
      
    });
});