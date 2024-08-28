import React, { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // the setCount function takes a function as an argument, which is called with the previous state as an argument and returns the new state.
        // the argument can be named anything, but 'prevCount' is a good one to use 
        // in the example above, the previous state is retrieved, it is then incremented by 1 and the new state is returned.
        // the function can also be used to update state based on the previous state, and to ensure that the state is updated correctly.
        setCount(prevCount => prevCount + 1);
        // if you were to call setCount(count + 1); in this case, there would be a potential for an issue.
        // because setCount is asynchronous, the value of count would be the count value at the time the function is called, not the count value at the time the function is executed. 
        // this means that the function would not update the state correctly.
        setCount(prevCount => prevCount + 1);

    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);

    }

    const reset = () => {
        setCount(0);
    }

    return (<div className="counter-container">
        <p className="count-display"> {count}</p>
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
    </div >);


}
export default Counter