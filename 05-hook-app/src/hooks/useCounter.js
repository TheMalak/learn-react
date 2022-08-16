import { useState } from "react";

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);   
    
    const increment = (typeIncrement = 1) => {
        setCounter(counter + typeIncrement);
    }
    
    const decrement = (typeDecrement = 1) => {
        (counter <= 0) ? setCounter(0) : setCounter(counter - typeDecrement);
    }
    
    const reset = () => {
        setCounter(initialValue);
    }
    
    return {
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset
    };
}
