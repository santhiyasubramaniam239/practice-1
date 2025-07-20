//Counter App
import { useState } from 'react';
export default function Practice15() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>


            <p>Count Value : { count}</p>
        </div>
    )
}