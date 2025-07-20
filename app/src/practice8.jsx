//Update document title
import { useState, useEffect } from 'react';
export default function Practice8() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `clicked ${count} times`;
    }, [count]);

    return (
        <div>
        <button onClick={() => setCount(count+1)}>changetitlecount</button>
        </div>
    )
}

