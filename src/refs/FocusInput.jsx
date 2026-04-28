import { useRef } from "react"
// useRef Hook
export const FocusInput = () => {

    const inputRef = useRef(null)

    const handleInputFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref = {inputRef} type = "text" placeholder="Enter your name"></input>
            <button onClick={handleInputFocus}>Focus Input</button>
        </div>
    )
}