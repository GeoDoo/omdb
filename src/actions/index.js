import api from '../helpers/api'
import {
	SEARCH_BY_TITLE
} from './types'

export (string, num) => {
	return const req = api.fetchMoviesByStringSearch(string, num)
		.then(() => {
			return ({
				type: SEARCH_BY_TITLE,
				payload: movies
			})
	})
}