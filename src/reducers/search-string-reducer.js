import { SET_SEARCH_STRING, RESET_ALL } from '../actions/types'

const initialState = ''

const setSearchStringReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_SEARCH_STRING:
			return action.payload
		case RESET_ALL:
			return initialState
		default:
			return state
	}
}

export default setSearchStringReducer