import stackOverflowTypes from './stackOverflow.types';

export const saveQuestions = (value) => {
	return {
		type: stackOverflowTypes.SAVE_QUESTIONS,
		payload: {
			questions: [...value],
		},
	};
};

export const setFilter = (value) => {
	return {
		type: stackOverflowTypes.SET_FILTER,
		payload: {
			filter: value,
		},
	};
};

export const addError = (msg) => {
	return {
		type: stackOverflowTypes.ADD_ERROR,
		payload: {
			error: msg,
		},
	};
};

export const clearErrors = () => {
	return {
		type: stackOverflowTypes.CLEAR_ERRORS,
		payload: {},
	};
};
