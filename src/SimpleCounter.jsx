import { useState } from "react"

export const SimpleCounter = () => {

    const [count, setCount] = useState(0)
    console.log("Render phase: Component redered with count: " + count)

    const handleClick = () => {
        console.log("Before setCount" + count)
        setCount(count + 10) 
        setCount(count + 1) // This trigger wins, because is the last in the queue
        console.log("Stills in trigger phase. After setCount" + count)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}