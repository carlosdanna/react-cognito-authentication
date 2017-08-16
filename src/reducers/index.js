import { combineReducers } from 'redux';
import confirmation from './confirmation';
import login from './login';
import signin from './signin';

export default combineReducers({
    confirmation,
    login,
    signin
});