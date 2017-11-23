import { SEARCH_BY_TITLE } from '../actions/types'

const searchByTitleReducer = (state = {}, action) => {
	switch(action.type) {
		case SEARCH_BY_TITLE:
			console.log(action.payload)
			return state
		default:
			return state
	}
}

export default searchByTitleReducer