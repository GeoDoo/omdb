import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Main from './Main'
import NotFound from './NotFound'
import Home from '../containers/Home'
import ResultInfoPage from '../containers/ResultInfoPage'

describe('Navigates properly', () => { 

	// describe('to Home page', () => {
	// 	test('invalid path should redirect to 404', () => {
	// 	  const wrapper = mount(
	// 	    <MemoryRouter initialEntries={[ '/random' ]}>
	// 	      <Main />
	// 	    </MemoryRouter>
	// 	  )
	// 	  expect(wrapper.find(Home)).toHaveLength(0)
	// 	  expect(wrapper.find(NotFound)).toHaveLength(1)
	// 	})

	// 	test('valid path should not redirect to 404', () => {
	// 	  const wrapper = mount(
	// 	    <MemoryRouter initialEntries={[ '/' ]}>
	// 	      <Main />
	// 	    </MemoryRouter>
	// 	  )
	// 	  expect(wrapper.find(Home)).toHaveLength(1)
	// 	  expect(wrapper.find(NotFound)).toHaveLength(0)
	// 	})
	// })

	// describe('to Result page', () => {
	// 	test('invalid path should redirect to 404', () => {
	// 	  const wrapper = mount(
	// 	    <MemoryRouter initialEntries={[ '/random' ]}>
	// 	      <Main />
	// 	    </MemoryRouter>
	// 	  )
	// 	  expect(wrapper.find(ResultInfoPage)).toHaveLength(0)
	// 	  expect(wrapper.find(NotFound)).toHaveLength(1)
	// 	})

	// 	test('valid path should not redirect to 404', () => {
	// 	  const wrapper = mount(
	// 	    <MemoryRouter initialEntries={[ '/imdb-id/tt0062622' ]}>
	// 	      <Main />
	// 	    </MemoryRouter>
	// 	  )
	// 	  expect(wrapper.find(ResultInfoPage)).toHaveLength(1)
	// 	  expect(wrapper.find(NotFound)).toHaveLength(0)
	// 	})
	// })

})

test('renders without crashing', () => {
	shallow(<Main />)
})

