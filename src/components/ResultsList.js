import React, { Component } from 'react'
import Result from './Result'

class ResultsList extends Component {
	renderResults() {
		return this.props.results.map(result => {
			return (
				<Result 
					key={result.imdbID}
					title={result.Title}
					poster={result.Poster}
					type={result.Type}
					year={result.Year} />
			)
		})
	}

	render() {
		return (
			<ul className="results">
				{this.renderResults()}
			</ul>
		)
	}
}

export default ResultsList