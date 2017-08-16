const login = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_HAS_ERROR":
            return Object.assign({}, state, { hasError: action.hasErrored })
        case "LOGIN_SUCCESS":
            return Object.assign({}, state, { userData: action.userData })
        case "LOGIN_LOADING":
            return Object.assign({}, state, {isLoading: action.isLoading})
        default:
            return state
    }
}

export default login;