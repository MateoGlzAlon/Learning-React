function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in</h2>

    return (props.isLoggedin ? welcomeMessage : loginPrompt)


    /* if (props.isLoggedin) {
        return (
            <h2 className="welcome-message">Welcome {props.username}</h2>
        )
    } else {
        return <h2 className="login-prompt">Please log in</h2>
    } */

    // return props.isLoggedin ? <h2>Welcome {props.username}</h2> : <h2>Please log in</h2>
}

UserGreetings.proptypes = {
    isLoggedin: propTypes.bool,
    username: propTypes.string
}

UserGreetins.defaultProps = {
    isLoggedin: false,
    username: "Guest"
}

export default UserGreeting