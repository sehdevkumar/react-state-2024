import * as d3 from "d3";
import { useEffect, useState } from "react";

const Paths = ()=> {
      
    const [getPath,setPath] = useState<string>('');


    function drawPath<T extends d3.Path>(context:T) {
     context.moveTo(5,0);
    //  context.arc(200, 0, 50, 0, 2 * Math.PI);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
     context.lineTo(Math.random()* 200, Math.random()* 200);
      // etc.
      return context; // not mandatory, but will make it easier to chain operations
    }

  

    useEffect(()=> {
        setPath(drawPath(d3.path()).toString())
    },[])





    return (
      <div style={{ border: "1px solid red" }}>
        <h1>Path</h1>
        <svg>
          <path stroke="pink" fill="none" d={getPath} />
        </svg>
      </div>
    );


}


export default Paths