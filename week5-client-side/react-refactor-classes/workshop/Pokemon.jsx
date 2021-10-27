import React from "react";
// import { getPokemon } from "./utils";

function Pokemon({ name }) {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		getPokemon(name).then(setData);
	}, [name]);

	if (!data) return <p>Loading...</p>;
	return (
		<div>
			<h2>{data.name}</h2>
			<img
				src={data.sprites.front_default}
				alt={`${data.name} default sprite`}
			/>
		</div>
	);
}

// class Pokemon extends React.Component {
// 	state = {
// 		data: null,
// 	};
// 	componentDidMount() {
// 		const { name } = this.props;
// 		getPokemon(name).then((data) => this.setState({ data }));
// 	}
// 	componentDidUpdate(prevProps) {
// 		const { name } = this.props;
// 		// re-fetch new pokemon if name prop has changed
// 		if (prevProps.name !== name) {
// 			getPokemon(name).then((data) => this.setState({ data }));
// 		}
// 	}
// 	render() {
// 		// render loading until the fetch promise resolves
// 		if (!this.state.data) return <div>Loading...</div>;
// 		return (
// 			<div>
// 				<h2>{this.state.data.name}</h2>
// 				<img
// 					src={this.state.data.sprites.front_default}
// 					alt={`${this.state.data.name} default sprite`}
// 				/>
// 			</div>
// 		);
// 	}
// }

function getPokemon(name) {
	return window
		.fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((res) => {
			if (!res.ok) throw new Error("HTTP error");
			return res;
		})
		.then((res) => res.json());
}

export default Pokemon;
