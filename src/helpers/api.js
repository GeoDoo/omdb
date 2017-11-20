const api = {
	fetchMoviesByStringSearch(searchString = '', pageNum = 1) {
		return fetch(`http://www.omdbapi.com/?s=${searchString}&page=${pageNum}&apikey=${process.env.REACT_APP_API_KEY}`)
			.then(res => res.json())
	}
}

export default api