//Input Value Mirror
import { useState } from 'react';
export default function Practice11() {
    const [text, setText] = useState("");
    return (
        <div>
        <input type="text" value={text}
            placeholder="Enter your text here"
                onChange={(e) => setText(e.target.value)} />
            <p>{ text}</p>
        </div>
    )
}