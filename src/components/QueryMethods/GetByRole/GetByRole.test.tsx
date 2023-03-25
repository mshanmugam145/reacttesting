import { render, screen } from "@testing-library/react";
import GetByRole from "./GetByRole";

// Reference for Roles 
// https://www.w3.org/TR/html-aria/#docconformance

//getByRole
describe('GetByRole', () => {
    test('renders correctly', () => {
       render(<GetByRole />)

    //    getByRole with level Options
       const pageHeading = screen.getByRole("heading", {
            level: 1
       })
       expect(pageHeading).toBeInTheDocument();

       const sectionHeading = screen.getByRole("heading", {
            level: 2
       })
       expect(sectionHeading).toBeInTheDocument();


    //    getByRole with name Options
       const nameElement = screen.getByRole("textbox", {
        name: "Name"
       }); 
       expect(nameElement).toBeInTheDocument()

       const bioElement = screen.getByRole("textbox", {
        name:"Bio"
       })
       expect(bioElement).toBeInTheDocument(); 

       const jobLocationElement = screen.getByRole("combobox");
       expect(jobLocationElement).toBeInTheDocument();

       const termsElement = screen.getByRole("checkbox");
       expect(termsElement).toBeInTheDocument()

       const submitButtonElement = screen.getByRole("button")
       expect(submitButtonElement).toBeInTheDocument();
    });
});