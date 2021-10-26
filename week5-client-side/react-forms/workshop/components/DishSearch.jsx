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
				value={searchString}
				onChange={(event) =>
					setSearchString(event.target.value.toLocaleLowerCase())
				}
			/>
		</fieldset>
	);
}

export default DishSearch;
