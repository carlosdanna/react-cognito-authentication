import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { login } from '../actions/index';

class Login extends Component {
    constructor(props) {
        super(props)
        this.sendLogin = this.sendLogin.bind(this);
    }
    sendLogin(e) {
        e.preventDefault();
        this.props.login();
    }
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' onClick={this.sendLogin}>Submit</Button>
            </Form>
        )
    }
}




export default Login
