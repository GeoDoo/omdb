import { SET_ACTIVE_LINK } from '../actions/types'

const initialState = {
	active: 1
}

const setActiveLinkReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ACTIVE_LINK:
			return {
				...state,
				active: action.payload
			}
		default:
			return state
	}
}

export default setActiveLinkReducer