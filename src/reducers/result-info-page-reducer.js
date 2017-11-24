import { GET_RESULT_INFO_PAGE } from '../actions/types'

const initialState = {
	title: '',
	year: '',
	rated: '',
	released: '',
	runtime: '',
	genre: '',
	director: '',
	writer: '',
	actors: '',
	plot: '',
	language: '',
	country: '',
	awards: '',
	poster: '',
	ratings: [],
	metascore: '',
	imdbRating: '',
	imdbVotes: '',
	imdbID: '',
	type: '',
	DVD: '',
	boxOffice: '',
	production: '',
	website: ''
}

const resultInfoPageReducer = (state = initialState, action) => {
	switch(action.type) {
		case GET_RESULT_INFO_PAGE:
			return {
				title: action.payload.Title,
				year: action.payload.Year,
				rated: action.payload.Rated,
				released: action.payload.Released,
				runtime: action.payload.Runtime,
				genre: action.payload.Genre,
				director: action.payload.Director,
				writer: action.payload.Writer,
				actors: action.payload.Actors,
				plot: action.payload.Plot,
				language: action.payload.Language,
				country: action.payload.Country,
				awards: action.payload.Awards,
				poster: action.payload.Poster,
				ratings: action.payload.Ratings,
				metascore: action.payload.Metascore,
				imdbRating: action.payload.imdbRating,
				imdbVotes: action.payload.imdbVotes,
				imdbID: action.payload.imdbID,
				type: action.payload.Type,
				DVD: action.payload.DVD,
				boxOffice: action.payload.BoxOffice,
				production: action.payload.Production,
				website: action.payload.Website
			}
		default:
			return state
	}
}

export default resultInfoPageReducer