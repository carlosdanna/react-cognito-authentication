export const confirmation = (state = {}, action) => {
    switch (action.type) {
        case "CONFIRMATION_HAS_ERROR":
            return Object.assign({}, state, { hasError: action.hasError })
        case "CONFIRMATION_SUCCESS":
            return Object.assign({}, state, { userData: action.userConfirmation })
        case "CONFIRMATION_LOADING":
            return Object.assign({}, state, { isLoading: action.isLoading })
        default:
            return state
    }
}

export default confirmation;
