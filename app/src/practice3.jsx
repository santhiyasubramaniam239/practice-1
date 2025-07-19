import { useState } from 'react';
export default function Practice3() {
    const [text, setText] = useState('')
    return (
        <div>
            <input type="text"
                value={text} placeholder="Enter your text here"
                onChange={(e) => setText(e.target.value)}></input>
                <div>
                <p>{text}</p>
                </div>
        </div>
    )
}