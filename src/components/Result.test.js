import React from 'react'
import { shallow } from 'enzyme'
import Result from './Result'

test('renders without crashing', () => {
	shallow(<Result />)
})