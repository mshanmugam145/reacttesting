# Priority Order for RTL Queries - getAllBy

1. queryByRole
2. queryByLabelText
3. queryByPlaceholder
4. queryByText
5. queryByDisplayValue
6. queryByAltText
7. queryByTitle
8. queryByTestId

# Priority Order for RTL Queries - getAllBy

1. queryAllByRole
2. queryAllByLabelText
3. queryAllByPlaceholder
4. queryAllByText
5. queryAllByDisplayValue
6. queryAllByAltText
7. queryAllByTitle
8. queryAllByTestId

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


