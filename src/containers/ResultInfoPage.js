import React, { Component } from 'react'
import api from '../helpers/api'
import './ResultInfoPage.css'

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
				<div className="result-info-page--top">
					<div className="result-info-page--left">
						<img src={poster} alt={title} />
					</div>				
					<div className="result-info-page--right">
						<h2>{title}</h2>
						<p><span className="labels">Year: </span>{year}</p>
						<p><span className="labels">Released: </span>{released}</p>
						<p><span className="labels">Runtime: </span>{runtime}</p>
						<p><span className="labels">Genre: </span>{genre}</p>
						<p><span className="labels">Director: </span>{director}</p>
						<p><span className="labels">Writer: </span>{writer}</p>
						<p><span className="labels">Actors: </span>{actors}</p>
					</div>
				</div>
				<div className="result-info-page--bottom">
					<p><span className="labels label-top">Plot </span>{plot}</p>
					<p><span className="labels">Language: </span>{language}</p>
					<p><span className="labels">Country: </span>{country}</p>
					<p><span className="labels">Awards: </span>{awards}</p>
					<p><span className="labels">Rated: </span>{rated}</p>
					<ul>
						{this.renderRatings()}
					</ul>
					<p><span className="labels">Metascore: </span>{metascore}</p>
					<p><span className="labels">IMDB Rating: </span>{imdbRating}</p>
					<p><span className="labels">IMDB Votes: </span>{imdbVotes}</p>
					<p><span className="labels">IMDB ID: </span>{imdbID}</p>
					<p><span className="labels">Type: </span>{type}</p>
					<p><span className="labels">DVD: </span>{DVD}</p>
					<p><span className="labels">Box Office: </span>{boxOffice}</p>
					<p><span className="labels">Production: </span>{production}</p>
					<p><span className="labels">Website: </span>{website}</p>
				</div>
			</div>
		)
	}
}

export default ResultInfoPage