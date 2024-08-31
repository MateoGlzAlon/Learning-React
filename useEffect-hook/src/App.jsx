
import './App.css'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'

//useEffect(function, [dependencies])

// 1. useEffect (() => {}) Runs after re-render
// 2. useEffect (() => {}, []) Runs only on mount
// 3. useEffect (() => {}, [value]) Runs only on mount + when value changes


function App() {

  return (
    <>
      <MyComponent />

      <MyComponent2 />
    </>
  )
}

export default App
