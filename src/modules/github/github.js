import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GitHubAPI } from '.';
import { githubActions } from '.';

export default function Github() {
	const gitApi = new GitHubAPI();
	const { saveRepos, setUserName, setFilter, addError, clearErrors } =
		githubActions;
	const errors = useSelector((state) => state.errors);
	const repos = useSelector((state) => state.repos);
	const userName = useSelector((state) => state.userName);
	const filter = useSelector((state) => state.filter);
	const filtredRepos = useSelector((state) => state.filtredRepos);

	const dispatch = useDispatch();

	const getReposHandler = () => {
		gitApi
			.getRepos(userName)
			.then((resp) => {
				dispatch(saveRepos(resp));
				dispatch(clearErrors());
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};

	const changeUserNameHandler = (e) => {
		const { value } = e.target;
		dispatch(setUserName(value));
	};

	const changeFilterHandler = (e) => {
		const { value } = e.target;
		dispatch(setFilter(value));
	};

	useEffect(() => {
		userName && getReposHandler();
	}, []);

	return (
		<>
			<label htmlFor="user-name">
				Nazwa użytkownika:{' '}
				<input
					id="user-name"
					name="user-name"
					value={userName}
					onChange={changeUserNameHandler}
				></input>
			</label>
			<button onClick={getReposHandler}>OK</button>
			<br />
			<label htmlFor="repos-filter">
				Filtruj po nazwie:{' '}
				<input
					id="repos-filter"
					name="repos-filter"
					value={filter}
					onChange={changeFilterHandler}
				></input>
			</label>

			<ul>
				{errors.map((err, index) => (
					<li key={`error-${index}`} style={{ color: 'red' }}>
						{err}
					</li>
				))}

				{errors.length <= 0 &&
					filtredRepos.map((repo) => (
						<li key={repo.id}>
							<a href={repo.html_url}> {repo.name}</a>
						</li>
					))}

				{errors.length <= 0 &&
					!filter &&
					repos.map((repo) => (
						<li key={repo.id}>
							<a href={repo.html_url}> {repo.name}</a>
						</li>
					))}
			</ul>
		</>
	);
}
