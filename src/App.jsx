import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  useEffect(() => darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark"));
  

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <button onClick={ () => setDarkMode(!darkMode)}>Click Me!</button>
      <br />
      <br />
      <img src="src/assets/steve-jobs-1.jpg" alt="Literally god!" />
    </div>
  )
}

export default App
