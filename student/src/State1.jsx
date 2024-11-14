import React, { useEffect, useState } from "react";
export default function State1() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

  function handleIncrement () {
    setCount(count+1)
  }

    useEffect(() => {
      setCalculation( count * 2);
    }, [count]); 
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  


}