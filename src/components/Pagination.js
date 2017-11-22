import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

class Pagination extends Component {
	renderPageLinks() {
		let pager = []

		for (let i = 0; i < this.props.pages; i++) {
			let cssClasses = this.props.activeLink === (i+1) ? 'pager--item pager--item-active' : 'pager--item'
			pager.push(<li key={i.toString()} className={cssClasses} onClick={this.props.onClick}>{i+1}</li>)
		}

		return pager
	}

	render() {
		return (
			<ul className="pager">
				{this.renderPageLinks()}
			</ul>
		)
	}
}

Pagination.propTypes = {
	pages: PropTypes.number.isRequired,
	activeLink: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
} 

export default Pagination