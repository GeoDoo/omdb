import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

test('renders without crashing', () => {
	shallow(<Header />)
})