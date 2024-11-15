import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3">Vite + React App</h1>
      <Card userName="Utsav" post="Software Engineer" />
      <Card userName />
      <Card userName />
      <Card userName />
    </>
  );
}

export default App;
