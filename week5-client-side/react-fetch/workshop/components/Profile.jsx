import React from "react";

const url = "https://api.github.com/users/";

function Profile({ username }) {
	const [profile, setProfile] = React.useState(null);

	React.useEffect(() => {
		fetch(url + username)
			.then((res) => res.json())
			.then((data) => setProfile(data));
	}, [username]);

	if (!profile) {
		return <p>Loading...</p>;
	} else {
		console.log(profile);
		return (
			<React.Fragment>
				<h1>{profile.name}</h1>
				<img
					src={profile.avatar_url}
					alt={`profile pic of ${profile.name}`}
					width='128'
					height='128'
				/>
			</React.Fragment>
		);
	}
}

export default Profile;
