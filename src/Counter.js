import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";
const Counter = ({initialValue}) => {

    // 상태를 저장하는 변수, 상태를 변화시키는 함수
    const [count,setCount] = useState(initialValue)

    const onIncrease = () =>{
        setCount(count+1)
    }
    const onDecrease = () =>{
        setCount(count-1)
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />

        </div>
    )
}
Counter.defaultProps = {
    initialValue:0
}
export default Counter;