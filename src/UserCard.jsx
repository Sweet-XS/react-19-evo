import UserInfo from "./UserInfo"
// Forwarding props with spread operator
export const UserCard = ({name, ...rest}) => {
    return (
        <div>
            <h2>User {name} Details</h2>
            <UserInfo {...rest}></UserInfo>
        </div>
    )
}

