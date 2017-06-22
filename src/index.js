import React from 'react'
import { render } from 'react-dom'
import App from './App'

export const Root = () =>(
    <App />
)

render(<Root />, document.getElementById('react'))