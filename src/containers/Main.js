import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login'
import MainPage from './MainPage'
import Signin from '../components/Signin'
import VerifyAccount from '../components/VerifyAccount'
import { Container } from 'semantic-ui-react'

import TopBar from '../components/TopBar'

import { confirmationFetch, signInFetch, loginFetch } from '../actions/index'

class App extends Component {
    render() {
        let loginElement = null;
        if (this.props.isLogged) { loginElement = null }
        else { loginElement = <Login login={this.props.sendLogin} /> }
        return (
            <Container >
                <TopBar logged={this.props.isLogged} />
                {loginElement}
                <Signin signin={this.props.sendSignIn} />
                <VerifyAccount sendConfirmation={this.props.sendConfirmation} />
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.isLogged ? state.isLogged : false
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
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);