import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync, onCallPingAPI }) =>
    <div>
        <button onClick={onCallPingAPI}>
            call ping API
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
            Increment after 1 second
        </button>
        {' '}
        <button onClick={onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
            Decrement
        </button>
        <hr />
        <div>
            Clicked: {value} times
        </div>
    </div>

export default Counter;