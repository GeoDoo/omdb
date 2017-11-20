import React from 'react'
import imgPlaceholder from '../assets/images/n_a.png'
import './Result.css'

const Result = ({ title, poster, year, type }) => {
	let posterSrc = poster === 'N/A' ? imgPlaceholder : poster

	return (
		<li className="results--item">
			<div className="results--item-poster">
				<img src={posterSrc} alt={title} />
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
		</li>
	)
}

export default Result