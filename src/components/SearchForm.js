import React from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
	return (
		<form className="search-form" onSubmit={props.onSubmitForm}>	
			<input className="search-input" onChange={props.onChangeInput} value={props.givenInputValue} />
			<button className="search-button">Search</button>
		</form>
	)	
}

export default SearchForm