export const CustomButtom = () => {

    const handleClick = (e) => {
        console.log("Clicked element: ", e.target)
        console.log("Click coordinates: ", e.clientX, e.clientY)
        console.log("Which button", e.button)
        alert("Thanks for you Like !")
    }

    return <button onClick={handleClick}>Like</button>
}