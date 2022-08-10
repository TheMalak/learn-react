import { useState } from 'react';

export function CounterApp({ value }) {

    const [counter, setCunter] = useState(value);

    function handleAdd() {
        setCunter(counter + 1);
    }
    function handleRest() {
        if (counter <= 0) {
            setCunter(0);

        } else {
            setCunter(counter - 1);
        }

    }

    function handleRestart() {
        setCunter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button className="btn btn-primary" onClick={handleAdd}>+1</button>
            <button className="btn btn-primary" onClick={handleRest}>-1</button>
            <button className="btn btn-primary" onClick={handleRestart}>Restart</button>
        </>
    );
}