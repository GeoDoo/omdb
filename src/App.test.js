import React from 'react'
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

test('renders without crashing', () => {
	shallow(<App />)
})