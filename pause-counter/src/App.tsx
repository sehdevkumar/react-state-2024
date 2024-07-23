import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [getCountDown, setCountDown] = useState<number>(0);
  const [getPaused, setPaused] = useState<boolean>(false);

  const handlerPauseHandler = () => {
      setPaused(!getPaused);
  };


  useEffect(() => {
    let ref: number | undefined;
    if(!getPaused) {
       ref = setTimeout(() => {
        setCountDown(getCountDown + 1);
        clearTimeout(ref);
      }, 1000);
    }else {
      clearTimeout(ref);
    }

    return () => {
      clearTimeout(ref);
    };
  }, [getCountDown, getPaused]);

  return (
    <>
      <h1>Timer: {getCountDown}</h1>
      <button onClick={handlerPauseHandler}>
        {getPaused ? "Resume" : "Pause"} Counter
      </button>
    </>
  );
}

export default App;
