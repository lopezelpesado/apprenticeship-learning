import React from "react";
import DishList from "./components/DishList";
import PriceFilter from "./components/PriceFilter";

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
					<PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
				</form>
			</section>
			<section className='dishes'>
				<h2>Dishes</h2>
				<DishList min={min} max={max} />
			</section>
		</main>
	);
}

export default App;
