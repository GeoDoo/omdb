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

		// this.props.resetAll()
  }

	onSubmitForm(e) {
		e.preventDefault()
	
		if (this.props.searchString.value) {
			this.props.fetchResults(this.props.searchString.value, this.props.pager.active)
		} else {
			this.props.setErrorMessage('Please type some search keywords for the title you want to find')
		}
	}

	onPagerItemClick(e) {
		let pagerClickedLinkNum = this.props.setActiveLink(e)

  	scrollToTopOfPager();
    
    if (pagerClickedLinkNum !== this.props.pager.active) {        	
      this.props.fetchResults(this.props.searchString, this.props.pager.active)
    }
	}

	renderPager() {
    if (this.props.results.totalPages) {
      return <Pagination pages={this.props.results.totalPages} activeLink={this.props.pager.active} onClick={this.onPagerItemClick.bind(this)} />
    }
  }

  renderResultsList() {
  	if (this.props.results.movies.length) {
      return <ResultsList className="results-wrapper" results={this.props.results.movies} />
  	}

		if (this.props.results.errorMessage) {
      return <p className="error">{this.props.results.errorMessage}</p>
    } 

    if (this.props.customError.text) {
      return <p className="error">{this.props.customError.text}</p>
    } 
	}

	render() {
		// console.log('State', this.props)
		// console.log('Props', this.props)
		return(
			<div>
				<Welcome />
	    	<SearchForm 
	    		onSubmitForm={this.onSubmitForm.bind(this)} 
	    		onChangeInput={this.props.setSearchString}
	    		givenInputValue={this.props.searchString.value}
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
		searchString: state.homeSearchString,
		results: state.homeState,
		pager: state.homePagerActiveLink,
		customError: state.homeError
	}
}

export default connect(mapStateToProps, actions)(Home)