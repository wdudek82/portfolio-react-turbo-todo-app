# (Turbo) ToDo App with React/Redux

## ToDo App On Steroids :syringe:

### :tada: Hosted (VPS on DigitalOcean)

http://167.99.215.196

### :wrench: Tools used

1. React
2. prop-types (properties type checking for React)
3. Router v4 (react-router-dom)
4. Redux, react-redux, redux-devtools-extension
5. Lodash
6. CSS in JS (styled-components)
7. ESLint + airbnb config
8. Flow typechecking
9. Jest, Enzyme

### :bug: BUGS

* [ ] auto-focus on dynamic inputs
* [ ] switch paddings to margins in todo item icons (now we can e.g. delete item by clicking the padded space)

### :pencil2: TODO

* [x] Edit TODO List Header
* [x] Confirm item update with Enter, cancel with Esc
* [x] Edit existing todo items
* [x] Cancel editing todo item
* [x] Add themes/global CSS variables/SCSS helpers using styled-components and polished
* [x] Adding Redux to handle state (and that is intentional overkill)
* [x] Form for adding new items
* [x] Clicking pencil icon switch to edit mode
* [x] Event handler for removing all todo items
* [x] Sandbox Component grew quite big, so now it would be the right moment to refator it, and split it
* [x] Adding routing using React Router
* [x] Items marked as completed go to bottom of the list/go to separate "completed" (foldable?) list
* [x] Items filters
* [ ] Fading effect on todo item delete
* [ ] Move Todo header state to store
* [ ] Move filters state to store (create separate reducer and actions)
* [ ] Add cancel/accept icons to header input
* [ ] Mark all as completed
* [ ] Form validation + error messages
* [ ] Make it fully responsive (RWD)
* [ ] React Intl?
* [ ] Add drag & drop items
* [ ] Split Navbar component to Navigation and NavigationItem(s)
* [ ] Data persistence of some kind (Firebase?)
* [ ] User accounts, authentication/authorization
* [ ] Async actions with React Thunk/React Saga
* [ ] List of todo lists (ability to: add, view, and remove them)
* [ ] Lists sharing with other users
* [ ] Real time updates with websockets (SocketIO)
* [ ] Jest tests for reducers
* [ ] Jest tests for actions
* [ ] Jest + Enzyme tests for components
* [ ] NodeJS/Express API
