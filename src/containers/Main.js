import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login'
import MainPage from './MainPage'
import Signin from '../components/Signin'
import VerifyAccount from '../components/VerifyAccount'
import { Container, Button } from 'semantic-ui-react'

import TopBar from '../components/TopBar'

import { confirmationFetch, signInFetch, loginFetch, getCurrentUserFetch, getUserGroupsFetch,logout } from '../actions/index'

class App extends Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }
    render() {
        let loginElement = null;
        if (this.props.session) { loginElement = (
            <Button onClick={this.props.getUserGroupsFetch}>Get groups</Button>
        ) }
        else {
            loginElement = (<div>
                <Login login={this.props.sendLogin} />
                <Signin signin={this.props.sendSignIn} />
                <VerifyAccount sendConfirmation={this.props.sendConfirmation} />
            </div>
            )
        }
        return (
            <Container >
                <TopBar logged={this.props.session} logout={this.props.logout} />
                {loginElement}
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        session: state.currentUser.session ? state.currentUser.session : false
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendLogin: (data) => {
            dispatch(loginFetch(data));
        },
        sendSignIn: (data) => {
            dispatch(signInFetch(data))
        },
        sendConfirmation: (data) => {
            dispatch(confirmationFetch(data))
        },
        getCurrentUser: () => {
            dispatch(getCurrentUserFetch())
        },
        getUserGroupsFetch: () =>{
            dispatch(getUserGroupsFetch());
        },
        logout: ()=>{
            dispatch(logout());
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);