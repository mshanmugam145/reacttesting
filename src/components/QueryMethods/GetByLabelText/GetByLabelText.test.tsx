import { render, screen } from "@testing-library/react";
import GetByLabelText from "./GetByLabelText";

describe('GetByLabelText', () => {
    test('renders correctly', () => {
       render(<GetByLabelText />)

       const nameElement = screen.getByLabelText("Name")
       expect(nameElement).toBeInTheDocument();
      
       const nameElement1 = screen.getByLabelText("Job Location", {
         selector: "input",
       })
       expect(nameElement1).toBeInTheDocument();

       const termsElement = screen.getByLabelText("I agree");
       expect(termsElement).toBeInTheDocument()
    });
});