import React from "react";
import { useDispatch } from "react-redux";

function CounterNum() {


    const dispatch = useDispatch()

    const increment = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrement = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }

    const zero = () => {
        dispatch({
            type: 'ZERO'
        })
    }

    const plusTen = () => {
        dispatch({
            type: 'PLUS_TEN'
        })

    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={zero}>0</button>
            <button onClick={plusTen}>+10</button>
        </div>
    )

}

export default CounterNum