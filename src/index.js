import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US'
require("!style-loader!css-loader!sass-loader!./less/all.less");





export const Root = () => (
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>
)

render(<Root />, document.getElementById('react'));