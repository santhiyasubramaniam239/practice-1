//Click Tracker
import { useState } from 'react';
export default function Practice12() {
    const [click, setClick] = useState(0);

    return (
        <div>
            <button onClick={() => setClick(click+1)}>Button</button>
            <p>Button clicked { click} times</p>
        </div>

    )
}
