import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Welcome from './components/Welcome'
import SearchForm from './components/SearchForm'
import ResultsList from './components/ResultsList'
import Footer from './components/Footer'
import api from './helpers/api'
import calculatePages from './helpers/helper-funcs'
import './App.css'

class App extends Component {
	state = {
		searchString: '',
		movies: [],
		totalPages: 0,
		errorMessage: ''
	}

	fetchResults() {
		api.fetchMoviesByStringSearch('Starland')
			.then(json => {
				if (json.Response === "True") {				
					this.setState({
						movies: json.Search,
						totalPages: calculatePages(json.totalResults)
					})
				} else {
					this.setState({
						errorMessage: json.Error
					})
				}
			}).catch(error => { // TODO: App.test.js fails without with TypeError: Network request failed
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
	
		this.fetchResults(this.state.searchString)
	}

	onChangeInput(e) {
		this.setState({
			searchString: e.target.value
		})
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
        	{this.renderResultsList()}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App