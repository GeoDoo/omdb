import { RESET_ALL } from '../actions/types'

const initialState = {
	searchString: '',
	currentPage: 1,
	totalPages: 0,
	movies: [],
	errorMessage: ''
}

const setErrorMessageReducer = (state = initialState, action) => {
	switch(action.type) {
		case RESET_ALL:
			return initialState
		default:
			return state
	}
}

export default setErrorMessageReducer