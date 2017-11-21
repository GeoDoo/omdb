import React from 'react'
import { shallow } from 'enzyme'
import ResultsList from './ResultsList'

const results = [
	{
		Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNWU5YTA3MTktZTYwOC00Y2U0LTk5MDctNGY2NzBkZTc4NThmXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
		Title :"The Light of Western Stars",
		Type: "movie",
		Year: "1930", 
		imdbID: "tt0021070"
	}
]

test('renders without crashing', () => {
	shallow(<ResultsList results={results} />)
})