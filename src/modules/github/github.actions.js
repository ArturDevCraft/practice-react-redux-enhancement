import githubTypes from './github.types';

export const saveRepos = (value) => {
	return {
		type: githubTypes.SAVE_REPOS,
		payload: {
			repos: [...value],
		},
	};
};

export const setUserName = (value) => {
	return {
		type: githubTypes.SET_USERNAME,
		payload: {
			userName: value,
		},
	};
};

export const setFilter = (value) => {
	return {
		type: githubTypes.SET_FILTER,
		payload: {
			filter: value,
		},
	};
};

export const addError = (msg) => {
	return {
		type: githubTypes.ADD_ERROR,
		payload: {
			error: msg,
		},
	};
};

export const clearErrors = () => {
	return {
		type: githubTypes.CLEAR_ERRORS,
		payload: {},
	};
};
