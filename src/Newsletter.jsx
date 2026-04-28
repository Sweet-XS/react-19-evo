import { ActionButton } from "./ActionButton"

export const Newsletter = () => {

    const handleSubscribe = () => {
        alert("Thank you for Subscribe!")
    }

    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe}></ActionButton>
        </div>
    )
}