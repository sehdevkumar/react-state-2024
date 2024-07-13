// import { useState, memo } from "react";
// import "./App.css";

// const Memoversion = memo(function ChildApp() {
//   console.log("i should run once");

//   return <>I am an child component</>;
// });

// function App() {
//   const [count, setCount] = useState(0);

//   const someClicked = () => {
//     setCount( Math.random()*3);
//   };

//   return (
//     <>
//       {count}
//       <button onClick={someClicked}>Someone Clicked Me</button>
//       <Memoversion />
//     </>
//   );
// }

// export default App;


import { useState, memo, useCallback } from "react";
import "./App.css";

const Memoversion = memo(function ChildApp({ onClick }) {
  console.log("Child component re-rendered");

  return (
    <>
      <p>I am a child component</p>
      <button onClick={onClick}>Child Button</button>
    </>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = useCallback(() => {
    const index = Math.ceil(Math.random() * 3);
    console.log("Button clicked, updating count to", index);
    setCount(index);
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Parent Button</button>
      <Memoversion onClick={handleButtonClick} />
    </>
  );
}

export default App;
