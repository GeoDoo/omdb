import React from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
	return (
		<form className="search-form" onSubmit={props.onSubmitForm}>	
			<input className="search-input" onChange={props.onChangeInput} value={props.givenInputValue} />
			<button className="search-button button">Search</button>
			<button id="reset-button" className="reset-button button" onClick={props.onResetForm}>Reset</button>
		</form>
	)	
}

export default SearchForm