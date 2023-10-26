import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState("");

  let add = () => {
    if (count >= 20) {
      setLimit("Not Allowed More then 20 Count.");
    } else {
      setCount(count + 1);
    }
  };
  let del = () => {
    if (count <= 0) {
      setLimit("Negative Counter not Allowed.");
    } else {
      setCount(count - 1);
    }
  };
  let reset = () => {
    setCount(0);
  };
  let pageRefresh = () => {
    setCount(0);
    setLimit(" ");
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Current Value is: {count}</h2>
      <button onClick={add}>Add Value</button>
      <button onClick={del}>Delete Value</button>
      <button onClick={reset}>Reset Counter</button>
      <button onClick={pageRefresh}>Page Refresh</button>
      <p>{limit}</p>
    </>
  );
}

export default App;
