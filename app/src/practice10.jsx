import React, { useState, useEffect } from 'react';
export default function Practice10() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => prev + 1);
        }, 2000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <p>page loaded time:{time} seconds</p>


        </div>
    );
} 