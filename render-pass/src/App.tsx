import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  console.log("Component rendered with count:", count);

  useEffect(() => {
    console.log("useEffect called");

    const firstTimeout = setTimeout(() => {
      console.log("Setting count to 10");
      setCount(10);
    }, 2000);

    const secondTimeout = setTimeout(() => {
      console.log("Setting count to 20");
      setCount(20);
    }, 4000);

    const thirdTimeout = setTimeout(() => {
      console.log("Setting count to 30");
      setCount(30);
    }, 6000);

    return () => {
      console.log("Cleanup before the next effect or component unmount");
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
      clearTimeout(thirdTimeout);
    };
  }, []);

  return (
    <>
      <h2
      >Count: {count}</h2>
    </>
  );
}

export default App;
