import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Timer from "./components/Timer";

function App() {
  const [time, setTime] = useState(0);
  return (
    <main className="main">
      <Input time={time} setTime={setTime} />
      <Timer time={time} setTime={setTime} />
    </main>
  );
}

export default App;
