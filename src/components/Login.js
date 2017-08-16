import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { login } from '../actions/index';

class Login extends Component {
    constructor(props) {
        super(props)
        this.sendLogin = this.sendLogin.bind(this);
    }
    sendLogin(e) {
        e.preventDefault();
        let userData = {
            username: this.username,
            password: this.password
        }
        this.props.login(userData);
    }
    render() {
        return (
            <Grid >
                <Form>
                <h1>Login</h1>
                    <Form.Field>
                        <Grid.Row>
                            <label>Email</label>
                            <input placeholder='Email' type="email" onChange={(e)=>{this.username = e.target.value}}/>
                        </Grid.Row>
                    </Form.Field>
                    <Form.Field>
                        <Grid.Row>
                            <label>Password</label>
                            <input placeholder='Password' type='password' onChange={(e)=>{this.password = e.target.value}}/>
                        </Grid.Row>
                    </Form.Field>

                    <Button type='submit' onClick={this.sendLogin}>Login</Button>
                </Form>
            </Grid>
        )
    }
}




export default Login
