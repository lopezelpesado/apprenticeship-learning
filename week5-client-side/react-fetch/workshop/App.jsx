import React from "react";
import Profile from "./components/Profile";

function App() {
	const [username, setUsername] = React.useState("lopezelpesado");
	return (
		<main>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setUsername(event.target.username.value);
				}}
			>
				<input type='search' name='username' />
				<button type='submit'>Search!</button>
			</form>
			<Profile username={username} />
		</main>
	);
}

export default App;
