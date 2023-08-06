import "./styles.css";
import { useState } from "react";
export default function Random() {
  const [randomnum, setRandomnum] = useState(null);
  const numberfun = () => {
    const min = 2;
    const max = 9;
    const newnum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomnum(newnum);
  };
  return (
    <div className="App">
      <h1>Generate random number</h1>
      <button onClick={numberfun}>click</button>
      {randomnum !== null && <p> Random number:{randomnum}</p>}
    </div>
  );
}
