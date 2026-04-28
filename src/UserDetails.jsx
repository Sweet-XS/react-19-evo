const UserDetails = ({name, isOnline, hideOffline}) => {
    if (hideOffline && !isOnline) {
        return null
    }

    return (
        <div>
            <h3>{name}</h3>
            <span>{isOnline ? "Online" : "Offline"}</span>
            {isOnline ? (
                <button>Send Message</button>
            ) : (
                <small>Check back later</small>
            )}
        </div>
    )
}

export default UserDetails