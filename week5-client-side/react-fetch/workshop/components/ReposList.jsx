import React from "react";

function ReposList({ url }) {
	const [repos, setRepos] = React.useState(null);

	React.useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then(setRepos);
	}, [url]);

	if (!repos) {
		return <p>Repos loading...</p>;
	} else {
		console.log(repos);
		return repos.map((repo) => (
			<li key={repo.id}>
				<a href={repo.html_url}>{repo.name}</a>
			</li>
		));
	}
}

export default ReposList;
