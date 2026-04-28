import { useRef, useState } from "react"

export const StopWatch = () => {

    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)

    const start = () => {
        intervalRef.current =setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)
    }

    const stop = () => {
        clearInterval(intervalRef.current)
    }

    return (
        <div>
            <h2>Stopwatch time: {time}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>

        </div>
    )
}