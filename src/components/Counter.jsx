import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);


    //-- use UPDATER FUNCTIONS when you want to update the state multiple times

    const increment = () => {
        //prevCount represent the "count" pending state instead of the current state
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter">
           <p>Count: {count}</p>
           <button onClick={decrement}>Decrement</button>
           <button onClick={reset}>Reset</button>
           <button onClick={increment}>Increment</button>
        </div>
    )
}


export default Counter;

