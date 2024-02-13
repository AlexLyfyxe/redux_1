import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterNum from "../../components/Counter";

function CalculatPage() {

    const num = useSelector(state => state.num)


    return (
        <div className="content">
            <h1>{num}</h1>
            <CounterNum />
        </div>
    )
}

export default CalculatPage