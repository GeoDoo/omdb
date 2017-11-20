import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Welcome from './components/Welcome'
import SearchForm from './components/SearchForm'
import ResultsList from './components/ResultsList'
import Pagination from './components/Pagination'
import Footer from './components/Footer'
import api from './helpers/api'
import calculatePages from './helpers/helper-funcs'
import './App.css'

class App extends Component {
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
    return (
      <div className="app">
        <Header />
        <Main> 
        	<Welcome />
        	<SearchForm 
        		onSubmitForm={this.onSubmitForm.bind(this)} 
        		onChangeInput={this.onChangeInput.bind(this)} />
        	{this.renderPager()}
        	{this.renderResultsList()}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App