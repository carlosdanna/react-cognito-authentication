import React, { Component } from 'react';
import {configureStore} from '../stores/store';
import { Provider } from 'react-redux';

import Main from './Main'


let store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        )
    }
}

export default App;