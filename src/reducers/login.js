const login = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {}
        case "LOGOUT":
            return {}
        default:
            return state
    }
}

export default login;