import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import login from '../reducers/login'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        login,
        preloadedState,
        applyMiddleware(
            loggerMiddleware
        )
    )
}