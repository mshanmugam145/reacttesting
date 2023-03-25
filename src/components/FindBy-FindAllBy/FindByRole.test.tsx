import { render, screen } from "@testing-library/react";
import FindByRole from "./FindByRole";

describe('FindByRole', () =>{
   const skills = ['HTML, CSS', 'Js'];

   test('renders Login Button', () => {
      render(<FindByRole skills={skills} />)

      const loginButton = screen.getByRole("button", {
         name: 'Login'
      });
      expect(loginButton).toBeInTheDocument();
   })

   test('Start Learning Button is not rendered', () => {
      render(<FindByRole skills={skills} />)

      const startLearning = screen.queryByRole("button", {
         name: 'Start Learning'
      })
      expect(startLearning).not.toBeInTheDocument()
   })

   test("Start learning button is eventually displayed", async () => {
      render(<FindByRole skills={skills} />)
      const startLearningButton = await screen.findByRole("button", {
         name: 'Start Learning'
      }, {
         timeout: 2000
      })
      expect(startLearningButton).toBeInTheDocument();
   })

})