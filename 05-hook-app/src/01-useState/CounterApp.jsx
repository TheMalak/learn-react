import {useState} from 'react'

export const CounterApp = () => {

    const [counter, setCunter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1,counter2,counter3} = counter;

    function addCounter() {

        setCunter(
            {
                ...counter,
                counter1: counter.counter1 + 1,
            }
        );
    }

    return (
        <>
            <h1>Counter: {counter.counter1}</h1>
            <hr />
            <button className="btn btn-primary" onClick={addCounter}>+1</button>
        </>
    )
}
