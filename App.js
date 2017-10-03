// @flow
import React, { PureComponent } from 'react'
import Calculator from './src'
import { Provider } from 'react-redux'
import store from './src/store'

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Calculator />
            </Provider>
        )
    }
}
