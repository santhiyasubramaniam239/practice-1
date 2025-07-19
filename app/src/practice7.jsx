import { useState, useEffect } from 'react';
export default function Practice7() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("count incremented , value of count:", count);
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}