import Counter from "./Counter"
import { useState } from "react";

const CounterContainer = ({stock, initial=1, onAdd }) => {
    const [counter, setCounter]=useState(initial)

    const add = () => {
        if( counter < stock ){
          setCounter(counter + 1);
        }else{
          alert("maximo en stock")
        }
      };
      const rest = () => {
        if (counter > 1) {
          setCounter(counter - 1);
        } else {
          alert("no podes menos de 1");
        }
      };
      let objectProps = {
        rest,
        add,
        counter,
        onAdd
     
      };
  return (
    <div><Counter {...objectProps}/></div>
  )
}

export default CounterContainer