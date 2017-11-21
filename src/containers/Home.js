import React, { Component } from 'react'
import Welcome from '../components/Welcome'
import SearchForm from '../components/SearchForm'
import ResultsList from '../components/ResultsList'
import Pagination from '../components/Pagination'
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

	componentWillMount() {
		const { searchString, currentPage } = JSON.parse(localStorage.getItem('homeState'))
		if (searchString && currentPage) {
			this.fetchResults(searchString, currentPage)
		}
	}

	fetchResults(string, num) {
		api.fetchMoviesByStringSearch(string, num)
			.then(json => {
				if (json.Response === "True") {				
					this.setState({
						searchString: string,
						currentPage: num,
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

	rememberSearchString() {
		localStorage.clear()
		localStorage.setItem('homeState', JSON.stringify({
			searchString: this.state.searchString,
			currentPage: this.state.currentPage
		}))
	}

	renderResultsList() {
		if (this.state.errorMessage) {
      return <p className="error">{this.state.errorMessage}</p>
    } else {
      return <ResultsList className="results-wrapper" results={this.state.movies} rememberSearchString={this.rememberSearchString.bind(this)} />
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
	    		onChangeInput={this.onChangeInput.bind(this)}
	    		givenInputValue={this.state.searchString} />
	    	{this.renderPager()}
	    	{this.renderResultsList()}
	    	{this.renderPager()}
			</div>
		)
	}
}

export default Home