import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import omdbApp from './reducers'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(omdbApp)

ReactDOM.render((
  <App store={store} />
), document.getElementById('root')  || document.createElement('div'))

registerServiceWorker()