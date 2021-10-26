import React from "react";
import dishes from "../data";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
	const [min, setMin] = React.useState(0);
	const [max, setMax] = React.useState(0);

	return (
		<main>
			<section className='filters'>
				<h1>Burger Place</h1>
				<form>
					<fieldset>
						<legend>Price</legend>
						<label htmlFor='min-price'>
							Min Price
							<input
								type='range'
								name='min-price'
								id='min-price'
								min='0.5'
								max='9'
								step='0.25'
								value={min}
								onChange={(event) => setMin(event.target.value)}
							/>
						</label>
						<label htmlFor='max-price'>
							Max Price
							<input
								type='range'
								name='max-price'
								id='max-price'
								min='0.5'
								max='9'
								step='0.25'
								value={max}
								onChange={(event) => setMax(event.target.value)}
							/>
						</label>
					</fieldset>
				</form>
			</section>
			<section className='dishes'>
				<h2>Dishes</h2>
				<ul className='grid'>
					{dishes.map((dish) => (
						<li key={dish.id} className='card'>
							<h3>{dish.name}</h3>
							<p>{dish.description}</p>
							<b>£{dish.price}</b>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}

export default App;
