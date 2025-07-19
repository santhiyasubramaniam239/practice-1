import { useState } from 'react';
export default function Practice4() {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const AddItems = () => {
        if (text.trim() !== '') {
            setItems([...items, text]);
            setText('');
        }
    };
    return (
        <div>
            <input type="text"
                value={text} placeholder="Enter your text here"
                onChange={(e) => setText(e.target.value)}></input>
            <button onClick={AddItems}>ADD ITEM</button>
            <ul>
                {items.map((x, Index) => (

                    <li key={Index}>{x}</li>
                ))}
            </ul>

        </div>
    );
}