import { useRef } from 'react';
export default function Practice6() {
    const ref  = useRef();
    const Focus = () => {
        ref.current.focus();
    }
    return (
        <div>
            <input ref={ref} type="text" ></input>
            <button onClick={Focus }>click here to focus text box</button>
        </div>
    )
}