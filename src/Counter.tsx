import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count -1);
    const onReset = () => setCount(0);
    return (
        <div>
            <h1>counter: {count}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;

