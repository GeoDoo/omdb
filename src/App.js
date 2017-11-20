import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Welcome from './components/Welcome'
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
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
