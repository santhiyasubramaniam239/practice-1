import React, { useState } from 'react';
export default function Practice1() {
    const [count, setCount] = useState(0);
    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Increment count value</button>
        <p>Count value = {count}</p>
        </div>

    )
}