import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(10);

  const add = () => {
    count++;
    if (count <= 20) {
      setCount(count);
    } else {
      count = 20;
    }
  };
  const subtract = () => {
    count--;
    if (count >= 0) {
      setCount(count);
    } else {
      count = 0;
    }
  };

  return (
    <>
      <h3>Counter</h3>
      <h1>{count}</h1>

      <button onClick={add} style={{marginRight: 10}}>+</button>
      <button onClick={subtract}>-</button>

      <p> Note : Only works from 0 to 20</p>
    </>
  );
}

export default App;
