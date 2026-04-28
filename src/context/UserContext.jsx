import { createContext } from "react";

export const UserContext = createContext({
    user: {
        name: "Jennie Kim",
        role: "Singer",
        theme: "light",
    }, setUser: () => {}
})