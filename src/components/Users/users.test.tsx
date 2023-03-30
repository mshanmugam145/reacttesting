import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../mocks/server';
import Users from './users';

describe('Users', () => {
    test('renders correctly', () => {
        render(<Users />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toBeInTheDocument();
    })

    test('should render users data', async () => {
        render(<Users />)
        const listElement = await screen.findAllByRole("listitem")
        expect(listElement).toHaveLength(3)
    })

    test('renders error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', 
            (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        render(<Users />)
        const textElement = await screen.findByText('Error fetching users')
        expect(textElement).toBeInTheDocument();
    })
})