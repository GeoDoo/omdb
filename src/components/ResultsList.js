import React, { Component } from 'react'
import Result from './Result'
import './ResultsList.css'

class ResultsList extends Component {
	renderResults() {
		return this.props.results.map(result => {
			return (
				<Result 
					key={result.imdbID}
					id={result.imdbID}
					title={result.Title}
					poster={result.Poster}
					type={result.Type}
					year={result.Year} />
			)
		})
	}

	render() {
		return (
			<ul className="results" id="anchor">
				{this.renderResults()}
			</ul>
		)
	}
}

export default ResultsList