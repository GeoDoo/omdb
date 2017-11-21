import React, { Component } from 'react'
import api from '../helpers/api'

class ResultInfoPage extends Component {
	state = {
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

	componentWillMount() {
		const { id } = this.props.match.params

		api.fetchMovieByImdbID(id)
			.then(json => {
				if (json.Response === "True") {
					this.setState({
						title: json.Title,
						year: json.Year,
						rated: json.Rated,
						released: json.Released,
						runtime: json.Runtime,
						genre: json.Genre,
						director: json.Director,
						writer: json.Writer,
						actors: json.Actors,
						plot: json.Plot,
						language: json.Language,
						country: json.Country,
						awards: json.Awards,
						poster: json.Poster,
						ratings: json.Ratings,
						metascore: json.Metascore,
						imdbRating: json.imdbRating,
						imdbVotes: json.imdbVotes,
						imdbID: json.imdbID,
						type: json.Type,
						DVD: json.DVD,
						boxOffice: json.BoxOffice,
						production: json.Production,
						website: json.Website
					})
				}
			})
	}

	renderRatings() {
		return this.state.ratings.map(rating => {
			return <li key={rating.Source}>{rating.Source}: {rating.Value}</li>
		})
	}

	render() {
		const { 
			title,
			year,
			rated,
			released,
			runtime,
			genre,
			director,
			writer,
			actors,
			plot,
			language,
			country,
			awards,
			poster,
			metascore,
			imdbRating,
			imdbVotes,
			imdbID,
			type,
			DVD,
			boxOffice,
			production,
			website
		 } = this.state

		return (
			<div className="result-info-page">
				<h1>{title}</h1>
				<aside>
					<p>{year}</p>
					<p>{rated}</p>
					<p>{released}</p>
					<p>{runtime}</p>
					<p>{genre}</p>
					<p>{director}</p>
					<p>{writer}</p>
					<p>{actors}</p>
					<p>{plot}</p>
					<p>{language}</p>
					<p>{country}</p>
					<p>{awards}</p>
					<p><img src={poster} alt={title} /></p>
					<ul>
						{this.renderRatings()}
					</ul>
					<p>{metascore}</p>
					<p>{imdbRating}</p>
					<p>{imdbVotes}</p>
					<p>{imdbID}</p>
					<p>{type}</p>
					<p>{DVD}</p>
					<p>{boxOffice}</p>
					<p>{production}</p>
					<p>{website}</p>
				</aside>
			</div>
		)
	}
}

export default ResultInfoPage