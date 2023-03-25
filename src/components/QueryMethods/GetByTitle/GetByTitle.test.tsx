import { render, screen } from "@testing-library/react";
import GetByTitle from "./GetByTitle";

describe('GetByTitle', () => {
    test('renders correctly', () => {
       render(<GetByTitle />)

       const closeElement = screen.getByTitle("close")
       expect(closeElement).toBeInTheDocument();
    });
});