import { useState } from "react"

export const UserProfile = () => {

    const [user, setUser] = useState({
        name: "Tzuyu Chou",
        age: 24,
        email: "tzuyu@gmail.com",
        address: {
            city: "Seoul",
            country: "South Korea"
        }
    })

    const updateName = () => {
        setUser({
            ...user,
            name: "Jennie Kim"
        })
    }

    const updateAge = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    const updateCity = () => {
        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Jeju"
            } 
        })    
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            <button onClick={updateName}>Change Name to Jennie</button>
            <button onClick={updateAge}>Increase Age by 1</button>
            <button onClick={updateCity}>Move to Jeju</button>
        </div>
    )
}