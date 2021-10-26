import React from "react";

function DishSearch({ searchString, setSearchString }) {
	return (
		<fieldset>
			<legend>Search</legend>
			<label htmlFor='search'></label>
			<input
				type='text'
				name='search'
				id='search'
				onChange={(event) => setSearchString(event.target.value)}
			/>
		</fieldset>
	);
}

export default DishSearch;
