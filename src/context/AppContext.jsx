import { Header } from "./Header"
import { UserContextProvider } from "./UserContextProvider"

function AppContext() {

    return (
        <UserContextProvider>
            <div>
                <h1>Dashboard</h1>
                <Header></Header>
            </div>
        </UserContextProvider>
    )
}

export default AppContext