import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import login from '../reducers/login'

const loggerMiddleware = createLogger()

export const configureStore = () => {
    return createStore(
        login,
        applyMiddleware(
            loggerMiddleware
        )
    )
}