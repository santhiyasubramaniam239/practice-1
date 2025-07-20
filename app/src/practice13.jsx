//Character count
import { useState } from 'react';
export default function Practice13() {
    const [input, setInput] = useState("");
    return (
        <div>
            <input type="text" placeholder="Type here" value={input}
                onChange={(e) => setInput(e.target.value)} />
            <p>Count of Characters You typed:{ input.length}</p>


        </div>
    )
}