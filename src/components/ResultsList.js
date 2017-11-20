import React, { Component } from 'react'

class ResultsList extends Component {
	renderResults() {
		return this.props.results.map(result => {
			return (
				<li key={result.imdbID}>{result.Title}</li>
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