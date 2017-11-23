import React, { Component } from 'react'
import api from '../helpers/api'
import imgPlaceholder from '../assets/images/n_a.png'
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
				} else {
					this.props.history.push('/not-found')
				}
			})
	}

	renderRatings() {
		return this.state.ratings.map(rating => {
			return <li key={rating.Source}>{rating.Source}: {rating.Value}</li>
		})
	}

	renderPoster() {
		const { poster, title } = this.state
		let posterSrc = poster === 'N/A' ? imgPlaceholder : poster

		return <img src={posterSrc} alt={title} title={title} />
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
						{this.renderPoster()}
					</div>				
					<div className="result-info-page--right">
						<h2>{title}</h2>
						<div className="indent">
							<p><span className="labels">Year: </span>{year}</p>
							<p><span className="labels">Released: </span>{released}</p>
							<p><span className="labels">Runtime: </span>{runtime}</p>
							<p><span className="labels">Type: </span>{type}</p>
							<p><span className="labels">Genre: </span>{genre}</p>
							<p><span className="labels">Director: </span>{director}</p>
							<p><span className="labels">Writer: </span>{writer}</p>
							<p><span className="labels">Actors: </span>{actors}</p>
						</div>
					</div>
				</div>
				<div className="result-info-page--bottom">
					<div className="sections">
						<h3>Plot</h3>
						<p className="justify">{plot}</p>
					</div>
					<div className="sections">
						<h3>Production</h3>
						<div className="indent">
							<p><span className="labels">Production: </span>{production}</p>
							<p><span className="labels">Language: </span>{language}</p>
							<p><span className="labels">Country: </span>{country}</p>
						</div>
					</div>
					<div className="sections">
						<h3>Awards</h3>
						<div className="indent">
							<p><span className="labels">Awards: </span>{awards}</p>
						</div>
					</div>
					<div className="sections">
						<h3>Ratings</h3>
						<div className="indent">
							<p><span className="labels">Rated: </span>{rated}</p>
							<div>
								<span className="labels">Other ratings: </span>
								<ul>
									{this.renderRatings()}
								</ul>
							</div>
							<p><span className="labels">Metascore: </span>{metascore}</p>
							<div className="sections-imdb">
								<h4>IMDB</h4>
								<div className="indent">
									<p><span className="labels">ID: </span>{imdbID}</p>
									<p><span className="labels">Votes: </span>{imdbVotes}</p>
									<p><span className="labels">Rating: </span>{imdbRating}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="sections">
						<h3>Other info</h3>
						<div className="indent">
							<p><span className="labels">DVD: </span>{DVD}</p>
							<p><span className="labels">Box Office: </span>{boxOffice}</p>
							<p><span className="labels">Website: </span>{website}</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ResultInfoPage