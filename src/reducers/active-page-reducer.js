import { SET_ACTIVE_LINK, RESET_ALL } from '../actions/types'

const initialState = 1

const setActiveLinkReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ACTIVE_LINK:
			return action.payload
		case RESET_ALL:
			return initialState
		default:
			return state
	}
}

export default setActiveLinkReducer