import { render, screen } from "@testing-library/react";
import GetByTestId from "./GetByTestId";

describe('GetByTestId', () => {
    test('renders correctly', () => {
       render(<GetByTestId />)

       const customElement = screen.getByTestId("custom-element")
       expect(customElement).toBeInTheDocument();
    });
});