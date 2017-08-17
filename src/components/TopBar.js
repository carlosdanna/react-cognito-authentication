import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/index';
import {
    Button, Container, Menu
} from 'semantic-ui-react'

class TopBar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(e) {
        e.preventDefault();
        this.props.logout()
    }
    render() {
        let login = null
        if (this.props.logged) {
            login = (<Menu.Item position="right" onClick={this.logout}>Logout</Menu.Item>)
        } else {
            login = (<Menu.Item position="right">Login</Menu.Item>)
        }
        return (
                <Menu stackable>
                    <Menu.Item>Home</Menu.Item>
                    {login}
                </Menu>
                
                
        )
    }
}

export default TopBar