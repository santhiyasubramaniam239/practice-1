import { useState } from 'react';
export default function Practice2() {

    const [toggle, setToggle] = useState(false);

    return (
        <div>
           
            <button onClick={() => setToggle(!toggle)}> {toggle ? 'hide' : 'show'}  </button>
            {toggle && <p>This is the hidden text!</p>}
        </div>
    )
}
