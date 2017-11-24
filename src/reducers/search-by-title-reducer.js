import { SEARCH_BY_TITLE } from '../actions/types'
import { calculatePages } from '../helpers/helper-funcs'

const initialState = {
	movies: [],
	totalPages: 0,
	errorMessage: ''
}

const searchByTitleReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_BY_TITLE:
			if (action.payload.Response === "False") {
				return {
					...initialState,
					errorMessage: action.payload.Error
				}
			} else {
				return {
					movies:	[...action.payload.Search],
					totalPages: calculatePages(action.payload.totalResults)
				}
			}
		default:
			return state
	}
}

export default searchByTitleReducer