import React, {useState} from 'react';


export function ButtonWithUseState() {
    let [a, setA] = useState(1)
    const onClickHandler1 = () => {
        setA(++a)
    }
    const onClickHandler2 = () => {
        setA(a = 0)
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler1}>Count</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}