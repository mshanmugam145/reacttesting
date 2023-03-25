import { render, screen } from "@testing-library/react";
import GetByAltText from "./GetByAltText";

describe('GetByAltText', () => {
    test('renders correctly', () => {
       render(<GetByAltText />)

       const imageElement = screen.getByAltText("alternate name")
       expect(imageElement).toBeInTheDocument();
      
    });
});