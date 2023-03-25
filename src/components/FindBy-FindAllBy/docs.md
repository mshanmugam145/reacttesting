# Priority Order for RTL Queries - getAllBy

1. findByRole
2. findByLabelText
3. findByPlaceholder
4. findByText
5. findByDisplayValue
6. findByAltText
7. findByTitle
8. findByTestId

# Priority Order for RTL Queries - getAllBy

1. findAllByRole
2. findAllByLabelText
3. findAllByPlaceholder
4. findAllByText
5. findAllByDisplayValue
6. findAllByAltText
7. findAllByTitle
8. findAllByTestId

# RTL Queries Used for:

const headingElement = screen.getByRole("heading"); --> heading is not string, it is textmatch

## TextMatch:(string, regex, function)
### with String
<div> Hello World </div>
screen.getByText("Hello World") --> this is full string match
screen.getByText("llo Worl", {exact: false}) --> substring match
screen.getByText("Hello World", {exact: false}) --> ignore case

### with Regex
<div> Hello World </div>
screen.getByText(/World/) --> this is full string match
screen.getByText(/world/i) --> substring match, ignore case
screen.getByText(/^hello World$/i) --> full string match, ignore case

### with Custom Function
(content?: string, element?: Element | null) => boolean
<div> Hello World </div>
screen.getByText((content) => content.startsWith('Hello'))



