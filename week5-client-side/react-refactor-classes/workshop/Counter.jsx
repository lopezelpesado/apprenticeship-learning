import React from "react";

function Counter() {
	const [count, setCount] = React.useState(0);

	const decrement = () => setCount(count - 1);
	const increment = () => setCount(count + 1);

	return (
		<div>
			<button onClick={decrement} aria-label='Decrement count'>
				-
			</button>
			<span>Count is {count}</span>
			<button onClick={increment} aria-label='Increment count'>
				+
			</button>
		</div>
	);
}

// class Counter extends React.Component {
// 	state = {
// 		count: 0,
// 	};
// 	decrement = () => {
// 		this.setState((oldState) => {
// 			return { count: oldState.count - 1 };
// 		});
// 	};
// 	increment = () => {
// 		this.setState((oldState) => {
// 			return { count: oldState.count + 1 };
// 		});
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.decrement} aria-label='Decrement count'>
// 					-
// 				</button>
// 				<span>Count is {this.state.count}</span>
// 				<button onClick={this.increment} aria-label='Increment count'>
// 					+
// 				</button>
// 			</div>
// 		);
// 	}
// }

export default Counter;
