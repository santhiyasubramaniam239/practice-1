//Show or Hide text
import { useState } from 'react';
export default function Practice14() {
    const [show, setShow] = useState(false);
    const Text = "Hello";
    return (
        <div>
            <button onClick={() => setShow(!show)}>click here</button>

            <p>{show && Text} </p>
        </div>
    )
}