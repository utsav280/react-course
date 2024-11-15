import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let counter = 1;
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React Course {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
