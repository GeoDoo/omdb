import React from 'react'
import { Link } from 'react-router-dom'
import imgPlaceholder from '../assets/images/n_a.png'
import './Result.css'

const Result = ({ id, title, poster, year, type, rememberSearchString }) => {
	let posterSrc = poster === 'N/A' ? imgPlaceholder : poster

	return (
		<li className="results--item" onClick={rememberSearchString}>
			<Link to={`/imdb-id/${id}`}>
				<div className="results--item-poster">
					<img src={posterSrc} alt={title} title={title} />
				</div>
				<div className="results--item-info">
					<div className="results--item-info--inner">
						<h2>{title}</h2>
						<div className="results--item-type-year">
							<span>{type}, </span>
							<span>{year}</span>
						</div>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default Result