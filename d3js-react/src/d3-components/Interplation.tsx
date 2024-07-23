import * as d3 from 'd3';
import { useEffect, useState } from 'react';

const Interpolation = ()=> {
    
    const [getValueInterPolation,setValueInterPolation] = useState<number>(0);

    const valueInterpolation = ()=> {
        
        const valueInterpolation =  d3.interpolate(30,40)(10);

        setValueInterPolation(valueInterpolation);

    }

    const [getColorInterPolation, setColorInterPolation] = useState<string>();

    const colorInterpolation = () => {

        const colorInterpolation = d3.interpolateRgb('red','pink')(10);

        setColorInterPolation(colorInterpolation);

    }

    useEffect(()=> {
      
        valueInterpolation()
        colorInterpolation()

    },[])



    return (
      
        <div style={{border: '1px solid #FFFFFF'}}>
            <h1>Interpolation</h1>
            <h3>When You Blend the two
                values based on the second</h3>
           <p>
                This is Value Interpolation {getValueInterPolation} of d3.interpolate(30,40)(10)
            </p> 
            <p>
                This is Color Interpolation {getColorInterPolation} of  d3.interpolateRgb('red','pink')(0.5);
            </p>
            
            </div>
        
    )



}


export default Interpolation