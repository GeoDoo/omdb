import api from '../helpers/api'
import {
	SEARCH_BY_TITLE
} from './types'

export const fetchResults = (string, num) => {
	const request = api.fetchMoviesByStringSearch(string, num)
	return ({
		type: SEARCH_BY_TITLE,
		payload: request
	})
}