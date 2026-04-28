import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({
        name: "Tzuyu Chou",
        role: "Singer, Dancer",
        theme: "light"
    })

    return <UserContext value={{user, setUser}}>{children}</UserContext>
}