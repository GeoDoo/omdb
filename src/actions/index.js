import api from '../helpers/api'
import {
	SEARCH_BY_TITLE,
	SET_SEARCH_STRING,
	SET_ACTIVE_LINK,
	SET_ERROR_MESSAGE,
	RESET_ALL
} from './types'

export const fetchResults = (string, num) => {
	const request = api.fetchMoviesByStringSearch(string, num)
	return ({
		type: SEARCH_BY_TITLE,
		payload: request
	})
}

export const setSearchString = (e) => {
	return {
		type: SET_SEARCH_STRING,
		payload: e.target.value
	}
}

export const setActiveLink = (e) => {
	return {
		type: SET_ACTIVE_LINK,
		payload: [...e.target.parentElement.children].indexOf(e.target) + 1
	}
}

export const setErrorMessage = (message) => {
	return {
		type: SET_ERROR_MESSAGE,
		payload: message
	}
}

export const resetAll = () => {
	return {
		type: RESET_ALL
	}
}