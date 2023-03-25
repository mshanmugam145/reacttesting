# Priority Order for RTL Queries - getAllBy

1. getByRole
2. getByLabelText
3. getByPlaceholder
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

# Priority Order for RTL Queries - getAllBy

1. getAllByRole
2. getAllByLabelText
3. getAllByPlaceholder
4. getAllByText
5. getAllByDisplayValue
6. getAllByAltText
7. getAllByTitle
8. getAllByTestId

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


