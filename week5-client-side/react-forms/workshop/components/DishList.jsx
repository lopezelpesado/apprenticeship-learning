import React from "react";
import dishes from "../data";

function DishList({ min, max, category }) {
	return (
		<ul className='grid'>
			{dishes
				.filter(
					(dish) =>
						dish.price >= min && dish.price <= max && dish.category === category
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
