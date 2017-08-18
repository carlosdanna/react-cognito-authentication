export const currentUser = (state = {}, action) => {
    switch (action.type) {
        case "CURRENT_USER_HAS_ERROR":
            return Object.assign({}, state, { hasError: action.hasError })
        case "CURRENT_USER_SUCCESS":
            return Object.assign({}, state, { session: action.session })
        case "CURRENT_USER_LOADING":
            return Object.assign({}, state, { isLoading: action.isLoading })
        case "GET_USER_GROUPS":
            return Object.assign({}, state, { groups: action.groups })
        case "LOGOUT":
            return Object.assign({}, state, { session: false })
        default:
            return state
    }
}

export default currentUser;
