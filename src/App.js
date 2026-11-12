import { useState } from "react";
import "./App.css";

function App() {

  // Create state variable
  const [count, setCount] = useState(0);

  // Increment function
  function increment() {
    setCount(count + 1);
  }

  // Decrement function
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  // Reset function
  function reset() {
    setCount(0);
  }

  return (
    <div className="container">

      <h1>Counter App</h1>

      <h2>{count}</h2>

      {count === 0 ? (
        <p>Minimum limit reached</p>
      ) : (
        <p>You can decrease the count</p>
      )}
      
      <div className="buttons">

        <button id="increment" onClick={increment}>
          Increment +
        </button>

        <button id="decrement" onClick={decrement}>
          Decrement -
        </button>

        <button id="reset" onClick={reset}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;