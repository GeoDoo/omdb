import React from 'react'
import { shallow } from 'enzyme'
import Pagination from './Pagination'

const onClickMock = jest.fn()

test('renders without crashing', () => {
	shallow(<Pagination pages={3} activeLink={2} onClick={onClickMock} />)
})