import { useState } from 'react';
export default function Practice5() {
    const [count1, setCount1] = useState(0);
    return (
        <div>
        <button onClick={() => setCount1(count1 + 1)}>Increment</button>
        <button onClick={()=> setCount1(count1-1) }>Decrement</button>
            <p>Count value:{ count1}</p>
        </div>

     )
}