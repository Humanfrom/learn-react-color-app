import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import storeFactory from './components/store'
import {Provider} from 'react-redux'

//localStorage.clear();
const store = storeFactory()

window.React = React
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)
