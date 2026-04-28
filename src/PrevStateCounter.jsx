import { useState } from "react"

export const PrevStateCounter = () => {

    const [count, setCount] = useState(0)
    console.log("Render phase: Component redered with count: " + count)

    const handleClick = () => {
        setCount((prev) => prev + 100)
        setCount((prev) => prev + 10)
        setCount((prev) => prev + 1)  
        console.log("Use this way if you wish to update state multiple times before next render" + count)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}