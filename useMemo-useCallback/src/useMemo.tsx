import React, { useMemo, useState } from "react";

const ExpensiveComputationComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // This function simulates an expensive computation
  const expensiveComputation = (num: number) => {
    console.log("Computing...");
    for (let i = 0; i < 1000000000; i++) {} // Simulating a heavy computation
    return num * 2;
  };

  // Memoize the result of the expensive computation
  const computedValue = useMemo(() => {
    return expensiveComputation(count);
  }, [count]); // Recalculate only when `count` changes

  return (
    <div>
      <h1>Expensive Computation with useMemo</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <p>Computed Value: {computedValue}</p>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

export default ExpensiveComputationComponent;
