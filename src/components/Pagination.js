import React, { Component } from 'react'
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

export default Pagination