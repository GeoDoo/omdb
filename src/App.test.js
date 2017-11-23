import React from 'react'
import { shallow } from 'enzyme'
import { createStore } from 'redux'
import omdbApp from './reducers'
import App from './App'

let store = createStore(omdbApp)

test('renders without crashing', () => {
	shallow(<App store={store} />)
})