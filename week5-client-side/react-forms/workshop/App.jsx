import React from "react";
import DishList from "./components/DishList";
import PriceFilter from "./components/PriceFilter";
import CategoryFilter from "./components/CategoryFilter";
import DishSearch from "./components/DishSearch";

function App() {
	const [min, setMin] = React.useState(0);
	const [max, setMax] = React.useState(9);
	const [category, setCategory] = React.useState("all");
	const [searchString, setSearchString] = React.useState("");

	return (
		<main>
			<section className='filters'>
				<h1>Burger Place</h1>
				<form>
					<PriceFilter min={min} setMin={setMin} max={max} setMax={setMax} />
					<CategoryFilter category={category} setCategory={setCategory} />
					<DishSearch
						searchString={searchString}
						setSearchString={setSearchString}
					/>
				</form>
			</section>
			<section className='dishes'>
				<h2>Dishes</h2>
				<DishList
					min={min}
					max={max}
					category={category}
					searchString={searchString}
				/>
			</section>
		</main>
	);
}

export default App;
