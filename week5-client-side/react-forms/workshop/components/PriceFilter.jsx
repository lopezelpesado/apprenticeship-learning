import React from "react";

function PriceFilter({ min, setMin, max, setMax }) {
	return (
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
	);
}

export default PriceFilter;
