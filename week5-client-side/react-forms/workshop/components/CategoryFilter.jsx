import React from "react";

const categories = [
	"all",
	"burger",
	"hot dog",
	"sandwich",
	"fries",
	"topping",
	"drink",
	"extra",
];

function CategoryFilter({ category, setCategory }) {
	return (
		<fieldset>
			<legend>Category</legend>
			{categories.map((item, index) => (
				<label htmlFor={item} key={index}>
					{item[0].toUpperCase() + item.slice(1)}
					<input
						type='radio'
						name='categories'
						id={item}
						value={item}
						checked={category === item}
						onChange={(event) => setCategory(event.target.value)}
					/>
				</label>
			))}
		</fieldset>
	);
}

export default CategoryFilter;
