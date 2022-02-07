import React, { useReducer, useState } from "react";
const CountRducer = (state, action) => {
    switch (action.type) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "PLUS":
            return state + action.payload;
        case "RESET":
            return 0;
        default:
            return state;
    }
}
function Reducer() {
    const [count, dispatch] = useReducer(CountRducer, 0)
    const [num, setNum] = useState(0)
    const Click = (e) => {
        dispatch({ type: e.target.name })
    }
    const Click2 = () => {
        dispatch({ type: "PLUS", payload: num })
    }
    return (
        <div className="App">
            <h1> {count}</h1>
            <button name='UP' onClick={Click}>UP</button>
            <button name='DOWN' onClick={Click}>DOWN</button>
            <button name='RESET' onClick={Click}>RESET</button>
            <button name='PLUS' onClick={Click2}>PLUS</button><br />
            <input type="text"onChange={(e)=>{setNum(Number(e.target.value))}} />
        </div>
    );
}
export default Reducer;