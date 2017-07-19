const login = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return Object.assign({}, state, { isLogged: true })
        case "LOGOUT":
            return Object.assign({}, state, { isLogged: false })
        default:
            return state
    }
}

export default login;