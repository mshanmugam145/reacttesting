import { render, screen } from "@testing-library/react"
import Greet from "../components/Basic/greet/Greet"
    // describe.only --> only this grp will run
    // describe.skip --> this will skip that grp alone
describe.skip('Greet', () => {
    test('Renders correctly', () => {
        render(<Greet />) 
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    describe('Nested Greet', () => {
        test('Renders with a name', () => {
            render(<Greet name="Shan"/>) 
            const textElement = screen.getByText("Hello Shan")
            expect(textElement).toBeInTheDocument()
        })
    })
    
    // test.only --> only this test will run
    // test.skip --> this will skip that test alone
})

describe.skip('Next Greet', () => {
    test('Renders with a name', () => {
        render(<Greet name="Shan"/>) 
        const textElement = screen.getByText("Hello Shan")
        expect(textElement).toBeInTheDocument()
    })
})
