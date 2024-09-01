import { useState } from "react";

function MyButton({ count, onClick }) {

    return (
        <button onClick={onClick}>Clicked {count} times</button>
    );
}
export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    //sharing 
    return (
        <div>
            <h1>Showing counters</h1>
            <MyButton onClick={handleClick} count={count} />
            <MyButton onClick={handleClick} count={count} />
            {/* <button onClick={handleClick}>Clicked {count} times</button> */}
        </div>
    );
}