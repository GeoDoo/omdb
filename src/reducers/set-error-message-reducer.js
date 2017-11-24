import { SET_ERROR_MESSAGE } from '../actions/types'

const initialState = {
	text: ''
}

const setErrorMessageReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_ERROR_MESSAGE:
			return {
				...state,
				text: action.payload
			}
		default:
			return state
	}
}

export default setErrorMessageReducer