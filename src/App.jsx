import { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const redStyle = randomNumber > 50 ? "red" : "";

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <>
      <h1>Random Number Generator</h1>
      <div className="card">
        <button
          onClick={() => setRandomNumber(generateRandomNumber())}
          className={redStyle}
        >
          Number: {randomNumber}
        </button>
      </div>
    </>
  );
}

export default App;
