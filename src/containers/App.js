import React, { Component } from 'react';

import Login from './Login'
import MainPage from './MainPage'

import TopBar from '../components/TopBar'

class App extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <Login />
                <MainPage />
            </div>
        )
    }
}


export default App