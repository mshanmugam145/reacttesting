import { render, screen } from "@testing-library/react";
import PointerInteractions from "./PointerInteractions";
import user from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("User-Event", () => {
    test("renders correctly", () => {
        render(<PointerInteractions />)

        const headingElement = screen.getByRole("heading")
        expect(headingElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("button", {
            name: "Increment"
        })
        expect(buttonElement).toBeInTheDocument();
    })

    test("renders a count of 0", () =>{
        render(<PointerInteractions />)
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("0");
    })

    test("renders a count of 1 after clicking the increment button", async () => {
        // userEvent.setup();
        render(<PointerInteractions />)
        const buttonElement = screen.getByRole("button", {
            name: "Increment"
        })
        await userEvent.click(buttonElement)

        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1");
    })
})