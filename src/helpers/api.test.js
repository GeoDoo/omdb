import fetchMock from 'fetch-mock'
import api from './api'

describe('api functions', () => {
	describe('fetchMoviesByStringSearch function', () => {
		test('fetchMoviesByStringSearch function can fetch data from API  provided with at least a searchString', () => {
			fetchMock.get(`http://www.omdbapi.com/?s=Gattaca&page=1&apikey=${process.env.REACT_APP_API_KEY}`, {hey: "I am a movie"})

	    api.fetchMoviesByStringSearch('Gattaca')
	    	.then(json => {
	    		expect(json.hey).toEqual("I am a movie")
	    	})
		})

		test('fetchMoviesByStringSearch function throws error when movie is not found', () => {
			fetchMock.get(`http://www.omdbapi.com/?s=Gattt&page=1&apikey=${process.env.REACT_APP_API_KEY}`, {error: "I am not a movie"})

	    api.fetchMoviesByStringSearch('Gattt')
	    	.then(json => {
	    		expect(json.error).toEqual("I am not a movie")
	    	})
		})
	})

	describe('fetchMovieByImdbID function', () => {
		test('fetchMovieByImdbID function can fetch data from API provided with an imdbID', () => {
			fetchMock.get(`http://www.omdbapi.com/?i=tt0119177&plot=full&apikey=${process.env.REACT_APP_API_KEY}`, {hey: "I am a movie"})

	    api.fetchMovieByImdbID('tt0119177')
	    	.then(json => {
	    		expect(json.hey).toEqual("I am a movie")
	    	})
		})

		test('fetchMovieByImdbID function throws error when movie is not found', () => {
			fetchMock.get(`http://www.omdbapi.com/?i=tt0119177sa&plot=full&apikey=${process.env.REACT_APP_API_KEY}`, {error: "I am not a movie"})

	    api.fetchMovieByImdbID('tt0119177sa')
	    	.then(json => {
	    		expect(json.error).toEqual("I am not a movie")
	    	})
		})
	})
})