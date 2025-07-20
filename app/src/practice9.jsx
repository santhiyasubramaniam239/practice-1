import { useState } from 'react';
export default function Practice9() {
    const [color, setColor] = useState(false);
    const style1 = {
        backgroundColor: color ? "white" : "black",
       
        Height: "100px",
        padding: "20px"
    };
    return (
        <div style={style1 }>
    <button onClick={() => setColor(!color)}>background color</button>

        </div>
    )
}