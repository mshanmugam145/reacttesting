import { render, screen } from "@testing-library/react";
import GetByAllRole from "./GetAllByRole";

describe('GetByAllRole', () =>{
   const skills = ['HTML, CSS', 'Js'];

   test('renders Correctly', () => {
      render(<GetByAllRole skills={skills} />)

      const listElement = screen.getByRole("list")
      expect(listElement).toBeInTheDocument();
   })

   test('renders a list of items', () => {
      render(<GetByAllRole skills={skills} />)
      const listItemElements = screen.getAllByRole("listitem")
      expect(listItemElements).toHaveLength(skills.length)
   })

})