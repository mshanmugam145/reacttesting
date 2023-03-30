import { render, screen } from "@testing-library/react";
import KeyboardInteractions from "./KeyboardInteractions";
import userEvent from "@testing-library/user-event";

describe("User-Event", () => {
    test("renders correctly", () => {
        render(<KeyboardInteractions />)

        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("button", {
            name: "Increment"
        })
        expect(buttonElement).toBeInTheDocument();
    })

    test("renders a count of 0", () =>{
        render(<KeyboardInteractions />)
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })

    test("renders a count of 1 after clicking the increment button", async () => {
        render(<KeyboardInteractions />)
        const buttonElement = screen.getByRole("button", {
            name: "Increment"
        })
        await userEvent.click(buttonElement)

        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1");
    })

    test("renders a count as 10 after clicking set button", async () => {
        render(<KeyboardInteractions />)
        const amountInput =  screen.getByRole('spinbutton')
        await userEvent.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        const setButton = screen.getByRole('button', {
            name: 'set'
        })
        await userEvent.click(setButton)

        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })

    test("renders whether elements are focused in correct order", async () => {
        render(<KeyboardInteractions />)

        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', {name: 'set'})
        await userEvent.tab()
        expect(incrementButton).toHaveFocus()

        await userEvent.tab()
        expect(amountInput).toHaveFocus()

        await userEvent.tab()
        expect(setButton).toHaveFocus()
    })
})