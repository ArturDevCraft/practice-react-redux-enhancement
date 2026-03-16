class StackOverflowAPI {
	url = 'https://api.stackexchange.com/2.3';
	site = 'stackoverflow';

	getRecentQuestions(pagesize = 30) {
		const params = new URLSearchParams({
			site: this.site,
			sort: 'creation',
			order: 'desc',
			pagesize: pagesize,
		});

		return fetch(`${this.url}/questions?${params.toString()}`)
			.then(this.handleErrors)
			.then((resp) => resp.json());
	}

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error(`Błąd pobierania danych: ${resp.status}`);
		}
		return resp;
	}
}

export default StackOverflowAPI;
