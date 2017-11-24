import { SEARCH_BY_TITLE, RESET_ALL } from '../actions/types'

const initialState = []

const moviesReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_BY_TITLE:				
			return action.payload.Response === "True" ? [...action.payload.Search] : []
		case RESET_ALL:
			return initialState
		default:
			return state
	}
}

export default moviesReducer