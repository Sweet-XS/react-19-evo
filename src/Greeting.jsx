// Default props
const Greeting = ({name = "Guest", message = "Hello"}) => {
    return (
        <div>
            <h2>{name}, {message}</h2>
        </div>
    )
}

export default Greeting