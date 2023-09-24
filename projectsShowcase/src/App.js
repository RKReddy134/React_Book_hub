import Header from './components/Header'
import Projects from './components/Projects'

import './App.css'

// this is the list (static data) used in the application. You can move it to any component if needed.

// const categoriesList = [
//   {id: 'ALL', displayText: 'All'},
//   {id: 'STATIC', displayText: 'Static'},
//   {id: 'RESPONSIVE', displayText: 'Responsive'},
//   {id: 'DYNAMIC', displayText: 'Dynamic'},
//   {id: 'REACT', displayText: 'React'},
// ]

// Replace your code here
const App = () => (
  <>
    <Header />
    <Projects />
  </>
)

export default App
