import { SEARCH_BY_TITLE, RESET_ALL } from '../actions/types'
import { calculatePages } from '../helpers/helper-funcs'

const initialState = 0

const searchByTitleReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEARCH_BY_TITLE:
			return calculatePages(action.payload.totalResults)
		case RESET_ALL:
			return 0
		default:
			return state
	}
}

export default searchByTitleReducer