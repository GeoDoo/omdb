import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import omdbApp from './reducers'
import async from './middlewares/async';
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

let store = applyMiddleware(async)(createStore)(omdbApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
  <App store={store} />
), document.getElementById('root')  || document.createElement('div'))

registerServiceWorker()