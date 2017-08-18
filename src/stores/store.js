import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/index'

const loggerMiddleware = createLogger()

export const configureStore = () => {
    return createStore(
        rootReducer, 
        composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        ))
    )
}