import React, { Component } from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'


class VerifyAccount extends Component {
    constructor(props) {
        super(props)
        this.sendConfirmation = this.sendConfirmation.bind(this);
    }
    sendConfirmation(e) {
        e.preventDefault();
        let confirmation = {
            confirmationCode: this.confirmationCode
        }
        this.props.sendConfirmation(confirmation);
        console.log(confirmation);
    }
    render() {
        return (
            <Grid >
                <Form>
                    <h1>Confirimation</h1>
                    <Form.Field>
                        <Grid.Row>
                            <label>Code</label>
                            <input placeholder='confirmation code' onChange={(e) => { this.confirmationCode = e.target.value }} />
                        </Grid.Row>
                    </Form.Field>

                    <Button type='submit' onClick={this.sendConfirmation}>Send Confirmation</Button>
                </Form>
            </Grid>
        )
    }
}




export default VerifyAccount
