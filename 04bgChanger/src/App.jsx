import { useState, useRef } from "react";

import "./App.css";

function App() {
  // const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }
  const [time, setTime] = useState(0);

  let timeRef = useRef(null);
  function startTimer() {
    if (timeRef.current === null) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  }

  function stopTimer() {
    console.log(timeRef.current);
    clearInterval(timeRef.current);
    timeRef.current = null;
  }
  return (
    <>
      {/* <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("Green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div> */}
      <h1>Stopwatch: {time}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default App;
