import { useState } from "react"

export const BatchingCounter = () => {

    const [count, setCount] = useState(0)
    const [active, setActive] = useState(false)
    const [name, setName] = useState("")
    console.log("Render phase: Component rendering")

    const handleClick = () => {
        setCount((prev) => prev + 10)
        setCount((prev) => prev + 10)
        setCount((prev) => prev + 1)  
        console.log("Use this way if you wish to update state multiple times before next render" + count)
        setName("Tzuyu")
        setActive(true)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <p>Name: {name}</p>
            <p>Active: {active ? "Yes" : "No"}</p>
            <button onClick={handleClick}>Update all 3</button>
        </div>
    )
}