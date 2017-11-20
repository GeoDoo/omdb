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
		movies: [],
		totalPages: 0
	}

	componentWillMount() {
		api.fetchMoviesByStringSearch()
			.then(json => {
				if (json.Response === "True") {				
					this.setState({
						movies: json.Search,
						totalPages: calculatePages(json.totalResults)
					})
				} else {
					console.log('failed')
				}
			}).catch(error => {
				console.log(error)
			})
	}

	renderResultsList() {
		if (this.state.movies) {
			return <ResultsList className="results-wrapper" results={this.state.movies} />
		}
	}

  render() {
    return (
      <div className="app">
        <Header />
        <Main> 
        	<Welcome />
        	<SearchForm />
        	{this.renderResultsList()}
        </Main>
        <Footer />
      </div>
    )
  }
}

export default App