import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './SearchForm'

test('renders without crashing', () => {
	shallow(<SearchForm />)
})