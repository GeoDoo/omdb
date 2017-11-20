import React, { Component } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import api from './helpers/api'
import './App.css';

class App extends Component {
	componentWillMount() {
		api.fetchMoviesByStringSearch()
			.then(json => {
				console.log(json)
			})
	}

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
