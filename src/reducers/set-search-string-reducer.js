import { SET_SEARCH_STRING } from '../actions/types'

const initialState = {
	value: ''
}

const setSearchStringReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_SEARCH_STRING:
			return {
				...state,
				value: action.payload
			}
		default:
			return state
	}
}

export default setSearchStringReducer