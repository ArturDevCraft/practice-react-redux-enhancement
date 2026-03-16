import types from './github.types';

const initState = {
	repos: [],
	userName: 'devmentor-pl',
	errors: [],
	filter: '',
	filtredRepos: [],
};

const githubReducer = (state = initState, action) => {
	switch (action.type) {
		case types.SAVE_REPOS:
			const { repos } = action.payload;
			return {
				...state,
				repos: repos,
			};
		case types.SET_USERNAME:
			const { userName } = action.payload;
			return {
				...state,
				userName: userName,
			};
		case types.SET_FILTER:
			const { filter } = action.payload;
			return {
				...state,
				filter: filter,
				filtredRepos: [
					...state.repos.filter((repo) => repo.name.includes(filter)),
				],
			};
		case types.ADD_ERROR:
			const { error } = action.payload;
			return { ...state, errors: [error, ...state.errors] };
		case types.CLEAR_ERRORS:
			return { ...state, errors: [] };
		default:
			return state;
	}
};

export default githubReducer;
