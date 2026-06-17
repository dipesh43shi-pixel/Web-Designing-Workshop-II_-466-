import { useState } from "react";

function App() {

  // State variable
  const [count, setCount] = useState(0);

  // Functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center",marginTop: "100px" }}>
      <h1>React Counter Application</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={increment} style={{backgroundColor:"blue",padding : "10px",margin :"10px"}}>Increment</button>

      <button onClick={decrement} style={{ backgroundColor:"blue",padding:"10px" }}>
        Decrement
      </button>

      <button onClick={reset} style={{bacckgroundcolor:"blue", marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default App;