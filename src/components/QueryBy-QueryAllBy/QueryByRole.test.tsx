import { render, screen } from "@testing-library/react";
import QueryByRole from "./QueryByRole";

describe('QueryByRole', () =>{
   const skills = ['HTML, CSS', 'Js'];

   test('renders Login Button', () => {
      render(<QueryByRole skills={skills} />)

      const loginButton = screen.getByRole("button", {
         name: 'Login'
      });
      expect(loginButton).toBeInTheDocument();
   })

   test('Start Learning Button is not rendered', () => {
      render(<QueryByRole skills={skills} />)

      const startLearning = screen.queryByRole("button", {
         name: 'Start Learning'
      })
      expect(startLearning).not.toBeInTheDocument()
   })

})