import { logRoles, render, screen } from "@testing-library/react";
import DebugTest from "./DebugTest";

describe('DebugTest', () =>{
   const skills = ['HTML, CSS', 'Js'];

   test('renders Login Button', () => {
      render(<DebugTest skills={skills} />)
      // screen.debug()
      const loginButton = screen.getByRole("button", {
         name: 'Login'
      });
      // screen.debug()
      expect(loginButton).toBeInTheDocument();
   })

   test('Start Learning Button is not rendered', () => {
      render(<DebugTest skills={skills} />)

      const startLearning = screen.queryByRole("button", {
         name: 'Start Learning'
      })
      expect(startLearning).not.toBeInTheDocument()
   })

   test("Start learning button is eventually displayed", async () => {
      const view = render(<DebugTest skills={skills} />)
      logRoles(view.container);
      // screen.debug()
      const startLearningButton = await screen.findByRole("button", {
         name: 'Start Learning'
      }, {
         timeout: 2000
      })
      // screen.debug()
      expect(startLearningButton).toBeInTheDocument();
   })

})