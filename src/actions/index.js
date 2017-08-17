import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

let poolData = {
    UserPoolId: 'us-east-1_3Zh1cIsyB', // Your user pool id here
    ClientId: '303ksft0keavlha75pb73aq2c6' // Your client id here
};
let userPool = new CognitoUserPool(poolData);
let cognitoUser = userPool.getCurrentUser();


export const  getCurrentUserConfirmation = (bool) => {
    return {
        type: "CURRENT_USER_LOADING",
        isLoading: bool
    }
}

export const  getCurrentUserHasErrored = (bool) => {
    return {
        type: "CURRENT_USER_HAS_ERROR",
        hasErrored: bool
    }
}

export const  getCurrentUserSuccess = (session) => {
    return {
        type: "CURRENT_USER_SUCCESS",
        session
    }
}

export const getCurrentUserFetch = (dispatch) => {
    return (dispatch) => {
        dispatch(getCurrentUserConfirmation(true))
        if (cognitoUser != null) {
            cognitoUser.getSession(function (err, session) {
                dispatch(getCurrentUserConfirmation(false))
                if (err) {
                    dispatch(getCurrentUserHasErrored(true))
                }
                dispatch(getCurrentUserSuccess(session.isValid()));
            });
        }else{
            dispatch(getCurrentUserConfirmation(false))
            return dispatch(getCurrentUserSuccess(false))
        }
    }
}

export const loginConfirmation = (bool) => {
    return {
        type: "LOGIN_LOADING",
        isLoading: bool
    }
}

export const loginHasErrored = (bool) => {
    return {
        type: "LOGIN_HAS_ERROR",
        hasErrored: bool
    }
}

export const loginSuccess = (userData) => {
    return {
        type: "LOGIN_SUCCESS",
        userData
    }
}

export const loginFetch = (data) => {
    return (dispatch) => {
        dispatch(loginConfirmation(true));
        console.log(data);
        console.log(poolData);
        var authenticationData = {
            Username: data.username,
            Password: data.password
        };
        var authenticationDetails = new AuthenticationDetails(authenticationData);

        var userData = {
            Username: data.username,
            Pool: userPool
        };
        var cognitoUser = new CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
                dispatch(loginConfirmation(false));
                dispatch(loginSuccess(result));
                dispatch(getCurrentUserFetch());
            },
            onFailure: (err) => {
                dispatch(loginConfirmation(false));
                console.error(err);
                dispatch(loginHasErrored(true));

            },
        });
    };
}



export const logout = () => {
    cognitoUser.signOut();
    return {
        type: 'LOGOUT',
    }
}

export const loadingConfirmation = (bool) => {
    return {
        type: "CONFIRMATION_LOADING",
        isLoading: bool
    }
}

export const confirmationHasErrored = (bool) => {
    return {
        type: "CONFIRMATION_HAS_ERROR",
        hasErrored: bool
    }
}

export const confirmationSuccess = (userConfirmation) => {
    return {
        type: "CONFIRMATION_SUCCESS",
        userConfirmation
    }
}

export const confirmationFetch = (data) => {
    return (dispatch) => {
        dispatch(loadingConfirmation(true));
        console.log(data.confirmationCode)
        cognitoUser.confirmRegistration(data.confirmationCode, true, function (err, result) {
            dispatch(loadingConfirmation(false));
            if (err) {
                console.error(err);
                dispatch(confirmationHasErrored(true));
            }
            dispatch(confirmationSuccess(result))
        });
    };
}


export const loadingSignin = (bool) => {
    return {
        type: "SIGNIN_LOADING",
        isLoading: bool
    }
}

export const signinHasErrror = (bool) => {
    return {
        type: "SIGNIN_HAS_ERROR",
        hasErrored: bool
    }
}

export const signInSuccess = (userData) => {
    return {
        type: "SIGNIN_SUCCESS",
        userData
    }
}

export const signInFetch = (userData) => {
    return (dispatch) => {
        dispatch(loadingSignin(true));
        let attributeList = [];
        let dataUsername = {
            Name: 'preferred_username',
            Value: userData.username
        };
        let dataEmail = {
            Name: 'email',
            Value: userData.email
        };
        let attributeUsername = new CognitoUserAttribute(dataUsername);
        let attributeEmail = new CognitoUserAttribute(dataEmail);
        attributeList.push(attributeUsername);
        attributeList.push(attributeEmail);
        userPool.signUp(userData.username, userData.password, attributeList, null, function (err, result) {
            dispatch(loadingSignin(false));
            if (err) {
                console.error(err)
                dispatch(signinHasErrror(true))
            }
            cognitoUser = result.user;
            dispatch(signInSuccess(result.user))
        });
    };
}