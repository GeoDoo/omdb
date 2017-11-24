import { GET_RESULT_INFO_PAGE } from '../actions/types'

const initialState = false

const redirectReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_RESULT_INFO_PAGE:
			return action.payload.Error ? true : false
		default:
			return state
	}
}

export default redirectReducer