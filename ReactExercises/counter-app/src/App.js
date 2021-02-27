import "./styles.css";
import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = (e) => {
    setCount(count + 1);
  };

  const decrement = (e) => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {count > 0 ? (
        <Counter count={count} color="green" />
      ) : (
        <Counter count={count} color="red" />
      )}
      <Button text="+" onClick={increment} />
      <Button text="-" onClick={decrement} />
    </div>
  );
}

export default App;
