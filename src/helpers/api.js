const api = {
	fetchMoviesByStringSearch() {
		return fetch(`http://www.omdbapi.com/?s=Starland&page=1&apikey=${process.env.REACT_APP_API_KEY}`)
			.then(res => res.json())
	}
}

export default api