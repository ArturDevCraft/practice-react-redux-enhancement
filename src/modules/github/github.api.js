class GitHubAPI {
	url = 'https://api.github.com';

	getRepos(userName) {
		// https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
		return fetch(`${this.url}/users/${userName}/repos`)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error(`Błąd pobierania danych, kod błędu: ${resp.status}`);
		}

		return resp;
	}
}

export default GitHubAPI;
