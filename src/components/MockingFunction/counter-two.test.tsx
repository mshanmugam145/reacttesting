import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Countertwo from './counter-two'

describe('CounterTwo', () => {
    test('render correctly', () => {
        render(<Countertwo count={0} />)
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    })

    test('handlers are called', async () => {
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<Countertwo count={0} handleDec={decrementHandler} handleInc={incrementHandler}/>)
        const incButton = screen.getByRole('button', { name: 'Increment' })
        const decButton = screen.getByRole('button', { name: 'Decrement' })
        await userEvent.click(incButton)
        await userEvent.click(decButton)
        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})