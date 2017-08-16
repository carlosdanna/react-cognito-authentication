const signin = (state = {}, action) => {
    switch (action.type) {
        case "SIGNIN_HAS_ERROR":
            return Object.assign({}, state, { hasError: action.hasErrored })
        case "SIGNIN_SUCCESS":
            return Object.assign({}, state, { userData: action.userData })
        case "SIGNIN_LOADING":
            return Object.assign({}, state, {isLoading: action.isLoading})
        default:
            return state
    }
}

export default signin;