import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Welcome from './components/Welcome'
import SearchForm from './components/SearchForm'
import Footer from './components/Footer'
import api from './helpers/api'
import './App.css';

class App extends Component {
	state = {
		movies: [],
		totalResults: 0
	}

	componentWillMount() {
		api.fetchMoviesByStringSearch()
			.then(json => {
				console.log(json)
				this.setState({
					movies: json.Search,
					totalResults: json.totalResults
				})
			})
	}

  render() {
    return (
      <div className="app">
        <Header />
        <Main> 
        	<Welcome />
        	<SearchForm />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
