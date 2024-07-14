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

const Memoversion = memo(function ChildApp({ onClick }) {
  console.log("i should not render..");

  return (
    <>
      <p>I am a child component</p>
      <button onClick={onClick}>Child Button</button>
    </>
  );
});

function UseCallBack() {
  const [count, setCount] = useState(0);

  console.log("hello world");

  const handleButtonClick = useCallback(() => {
    console.log("i am called but no changes");
    setCount(Math.floor(Math.random() * 2));
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <Memoversion onClick={handleButtonClick} />
    </>
  );
}

export default UseCallBack;
