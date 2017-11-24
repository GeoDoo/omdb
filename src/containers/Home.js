import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Welcome from '../components/Welcome'
import SearchForm from '../components/SearchForm'
import ResultsList from '../components/ResultsList'
import Pagination from '../components/Pagination'
import { scrollToTopOfPager } from '../helpers/helper-funcs'

class Home extends Component {
  onResetForm(e) {
		e.preventDefault()

		this.props.resetAll()
  }

	onSubmitForm(e) {
		e.preventDefault()
	
		if (this.props.searchString) {
				this.props.fetchResults(this.props.searchString, this.props.currentPage)
		} else if (this.props.searchString !== '' && this.props.movies.length === 0) {
			console.log('AAAAAAAAAAAAAA')
		} else {
			this.props.setErrorMessage('Please type some search keywords for the title you want to find')
		}
	}

	onPagerItemClick(e) {
		let pagerClickedLinkNum = this.props.setActiveLink(e)

  	scrollToTopOfPager();
    
    if (pagerClickedLinkNum !== this.props.currentPage) {        	
			setTimeout(() => {
      	this.props.fetchResults(this.props.searchString, this.props.currentPage)
			}, 100)
    }
	}

	renderPager() {
    if (this.props.totalPages) {
      return <Pagination pages={this.props.totalPages} activeLink={this.props.currentPage} onClick={this.onPagerItemClick.bind(this)} />
    }
  }

  renderResultsList() {
  	if (this.props.movies.length) {
      return <ResultsList className="results-wrapper" results={this.props.movies} />
  	}

		if (this.props.errorMessage) {
      return <p className="error">{this.props.errorMessage}</p>
    } 
	}

	render() {
		return(
			<div>
				<Welcome />
	    	<SearchForm 
	    		onSubmitForm={this.onSubmitForm.bind(this)} 
	    		onChangeInput={this.props.setSearchString}
	    		givenInputValue={this.props.searchString}
	    		onResetForm={this.onResetForm.bind(this)} />
	    	{this.renderPager()}
	    	{this.renderResultsList()}
	    	{this.renderPager()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchString: state.searchString,
		movies: state.movies,
		totalPages: state.totalPages,
		currentPage: state.currentPage,
		errorMessage: state.errorMessage
	}
}

export default connect(mapStateToProps, actions)(Home)