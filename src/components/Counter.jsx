import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../app/features/counterSlice.js";
// useSelector() to read initial state (or any data)
// useDispatch() in order to change or update state in redux store
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <>
            Counter
            <p>{count}</p>
            <button onClick={() => dispatch(increment(count))}>+</button>
            <button onClick={() => dispatch(decrement(count))}>-</button>
        </>
    )
}
export default Counter
