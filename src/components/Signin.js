import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'


class Signin extends Component {
    constructor(props) {
        super(props)
        this.sendSignin = this.sendSignin.bind(this);
    }
    sendSignin(e) {
        e.preventDefault();
        let userInfo = {
            username: this.username,
            email: this.email,
            password: this.password
        }
        this.props.signin(userInfo);
    }
    render() {
        return (
            <Grid >
                <Form>
                    <h1>Sign in</h1>
                    <Form.Field>
                        <Grid.Row>
                            <label>Username</label>
                            <input placeholder='Username' type='text' onChange={(e) => { this.username = e.target.value }} />
                        </Grid.Row>
                    </Form.Field>
                    <Form.Field>
                        <Grid.Row>
                            <label>Email</label>
                            <input placeholder='Email' type='email' onChange={(e) => { this.email = e.target.value }} />
                        </Grid.Row>
                    </Form.Field>
                    <Form.Field>
                        <Grid.Row>
                            <label>Password</label>
                            <input placeholder='Password' type='password' onChange={(e) => { this.password = e.target.value }} />
                        </Grid.Row>
                    </Form.Field>

                    <Button type='submit' onClick={this.sendSignin}>Create Account</Button>
                </Form>
            </Grid>
        )
    }
}




export default Signin
