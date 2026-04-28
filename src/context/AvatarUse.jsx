// React 19 introduces use API to replace useContext hook with almost the same behavior
// use api can be called anywhere inside a component
import { use } from "react"
import { UserContext } from "./UserContext"

export const AvatarUse = ({isLoading = true}) => {

    if (isLoading) {
        return <div>Loading user data...</div>
    }

    const {user, setUser} = use(UserContext)
    
    const toggleTheme = () => {
        setUser({
            ...user,
            theme: user.theme === "dark" ? "light" : "dark"
        })
    }

    return (
        <div>
            <p>Welcome, {user.name} !</p>
            <p>theme: {user.theme}</p>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}