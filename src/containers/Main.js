import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login'
import MainPage from './MainPage'

import TopBar from '../components/TopBar'

import { login } from '../actions/index'

class App extends Component {
    render() {
        let loginElement = null;
        if (this.props.isLogged) { loginElement = null }
        else { loginElement = <Login login={this.props.sendLogin} /> }
        return (
            <div >
                <TopBar logged={this.props.isLogged} />
                {loginElement}
                <MainPage />
            </div>
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
        sendLogin: () => {
            dispatch(login());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);