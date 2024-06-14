import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <>
      <h1>Random Number Generator</h1>
      <div className="card">
        <button onClick={() => setCount(generateRandomNumber())}>
          Number: {count}
        </button>
      </div>
    </>
  );
}

export default App;
