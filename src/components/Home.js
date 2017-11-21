import React, { Component } from 'react'
import Welcome from './Welcome'
import SearchForm from './SearchForm'
import ResultsList from './ResultsList'
import Pagination from './Pagination'
import api from '../helpers/api'
import { calculatePages, scrollToTopOfPager } from '../helpers/helper-funcs'

class Home extends Component {
	state = {
		searchString: '',
		movies: [],
		currentPage: 1,
		totalPages: 0,
		errorMessage: ''
	}

	fetchResults(string, num) {
		api.fetchMoviesByStringSearch(string, num)
			.then(json => {
				if (json.Response === "True") {				
					this.setState({
						movies: json.Search,
						totalPages: calculatePages(json.totalResults),
						errorMessage: ''
					})
				} else {
					this.setState({
						errorMessage: json.Error
					})
				}
			}).catch(error => {
				console.log(error)
			})
	}

	renderResultsList() {
		if (this.state.errorMessage) {
      return <p className="error">{this.state.errorMessage}</p>
    } else {
      return <ResultsList className="results-wrapper" results={this.state.movies} />
    }
	}

	onSubmitForm(e) {
		e.preventDefault()
	
		if (this.state.searchString) {
			this.fetchResults(this.state.searchString, this.state.currentPage)
		} else {
			this.setState({
				errorMessage: "Please add some text and then hit Search"
			})
		}
	}

	onChangeInput(e) {
		this.setState({
			searchString: e.target.value
		})
	}

	onPagerItemClick(e) {
		let pagerClickedLinkNum = [...e.target.parentElement.children].indexOf(e.target) + 1

  	scrollToTopOfPager();
    
    if (pagerClickedLinkNum !== this.state.currentPage) {    
    	
      this.setState({
        currentPage: pagerClickedLinkNum
      })

      setTimeout(() => {
        this.fetchResults(this.state.searchString, this.state.currentPage)
      }, 100)
    }
	}

	renderPager() {
    if (this.state.totalPages) {
      return <Pagination pages={this.state.totalPages} activeLink={this.state.currentPage} onClick={this.onPagerItemClick.bind(this)} />
    }
  }

	render() {
		return(
			<div>
				<Welcome />
	    	<SearchForm 
	    		onSubmitForm={this.onSubmitForm.bind(this)} 
	    		onChangeInput={this.onChangeInput.bind(this)} />
	    	{this.renderPager()}
	    	{this.renderResultsList()}
	    	{this.renderPager()}
			</div>
		)
	}
}

export default Home