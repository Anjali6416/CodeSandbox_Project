import "./styles.css";
import { useState } from "react";

export default function App() {
  const [backgroundcolor, setBackgroundcolor] = useState("white");
  const colorfun = () => {
    const randomcolor = getrandomcolor();
    setBackgroundcolor(randomcolor);
  };
  const getrandomcolor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="App">
      <h1>background color of input box change rendomly</h1>
      <input style={{ backgroundColor: backgroundcolor }} />
      <button onClick={colorfun}>Change color</button>
    </div>
  );
}
