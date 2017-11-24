import { SEARCH_BY_TITLE, SET_ERROR_MESSAGE, RESET_ALL } from '../actions/types'

const initialState = ''

const setErrorMessageReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_BY_TITLE:
			return action.payload.Error || null
		case SET_ERROR_MESSAGE:
			return action.payload
		case RESET_ALL:
			return 'Everything cleared!'
		default:
			return state
	}
}

export default setErrorMessageReducer