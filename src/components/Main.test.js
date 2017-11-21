import React from 'react'
import { shallow } from 'enzyme'
import Main from './Main'

test('renders without crashing', () => {
	shallow(<Main />)
})