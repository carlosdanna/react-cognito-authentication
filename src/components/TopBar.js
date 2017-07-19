import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/index';

class TopBar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout(e) {
        e.preventDefault();
        this.props.sendLogout()
    }
    render() {
        let login = null
        if (this.props.isLogged) {
            login = (<button onClick={this.logout}>Logout</button>)
        } else {
            login = (<button>login</button>)
        }
        return (
            <div className="navBar">
                Topbar
                {login}
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
        sendLogout: () => {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)