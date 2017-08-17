import { combineReducers } from 'redux';
import confirmation from './confirmation';
import login from './login';
import signin from './signin';
import currentUser from './currentUser'

export default combineReducers({
    confirmation,
    currentUser,
    login,
    signin
});