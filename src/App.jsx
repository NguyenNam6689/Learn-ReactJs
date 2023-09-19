import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "pink", "gray", "yellow", "green", "purple", "orange"];
  const [flag, setFlag] = useState({ color: "blue" });
  const handleChangeColor = () => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    console.log(random);
    setFlag({ color: random });
  };
  return (
    <>
      <h1 style={flag}></h1>
      <button onClick={handleChangeColor}>Change color</button>
    </>
  );

  // const order = [100, 200, 300];
  // const [counter, setCounter] = useState(() => {
  //   const total = order.reduce((acc, order) => acc + order);
  //   console.log(total);
  //   return total;
  // });

  // const handleIncrement = () => {
  //   setCounter((count) => count + 1);
  // };
  // return (
  //   <>
  //     <h3>{counter}</h3>
  //     <button onClick={handleIncrement}>Increment</button>
  //   </>
  // );
}

export default App;
