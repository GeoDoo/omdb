import React from 'react'
import { shallow } from 'enzyme'
import Welcome from './Welcome'

test('renders without crashing', () => {
	shallow(<Welcome />)
})