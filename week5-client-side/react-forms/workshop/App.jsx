import React from "react";
import DishList from "./components/DishList";
import PriceFilter from "./components/PriceFilter";
import CategoryFilter from "./components/CategoryFilter";

function App() {
	const [min, setMin] = React.useState(0);
	const [max, setMax] = React.useState(0);
	const [category, setCategory] = React.useState("burger");

	return (
		<main>
			<section className='filters'>
				<h1>Burger Place</h1>
				<form>
					<PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
					<CategoryFilter category={category} setCategory={setCategory} />
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
