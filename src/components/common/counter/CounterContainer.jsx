import { useState } from "react";

import CounterPresentational from "./CounterPresentational";

export const CounterContainer = ( {stock, initial=1, onAdd } ) => {
  
    const [counter, setcounter] = useState(initial);

  const sumar = () => {
    if( counter < stock ){
      setcounter(counter + 1);
    }else{
      alert("maximo en stock")//CAMBIAR ALERT POR ALGO MAS LINDO
    }
  };

  const restar = () => {
    if (counter > 1) {
      setcounter(counter - 1);
    } else {
      alert("no podes menos de 1");
    }
  };



  let objectProps = {
    restar,
    sumar,
    counter,
    onAdd
 
  };

  return (
    <CounterPresentational {...objectProps} />
  );
};