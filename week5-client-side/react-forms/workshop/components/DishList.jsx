import React from "react";
import dishes from "../data";

function DishList({ min, max, category, searchString }) {
	return (
		<ul className='grid'>
			{dishes
				.filter((dish) =>
					category === "all" ? true : dish.category === category
				)
				.filter((dish) => dish.price >= min && dish.price <= max)
				.filter((dish) =>
					new RegExp(/^\s*$/).test(searchString)
						? true
						: dish.name.toLocaleLowerCase().includes(searchString)
				)
				.map((dish) => (
					<li key={dish.id} className='card'>
						<h3>{dish.name}</h3>
						<p>{dish.description}</p>
						<b>£{dish.price}</b>
					</li>
				))}
		</ul>
	);
}

export default DishList;
