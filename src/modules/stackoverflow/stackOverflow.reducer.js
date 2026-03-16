import types from './stackOverflow.types';

const initState = {
	questions: [],
	errors: [],
	filter: '',
	filtredQuestions: [],
};

const stackOverflowReducer = (state = initState, action) => {
	switch (action.type) {
		case types.SAVE_QUESTIONS:
			const { questions } = action.payload;
			return {
				...state,
				questions: questions.sort((a, b) => {
					const repA = a.owner.reputation || 0;
					const repB = b.owner.reputation || 0;
					return repB - repA;
				}),
			};
		case types.SET_FILTER:
			const { filter } = action.payload;
			return {
				...state,
				filter: filter,
				filtredQuestions: [
					...state.questions.filter(
						(question) =>
							question.owner.display_name
								.toLowerCase()
								.includes(filter.toLowerCase()) ||
							question.title.toLowerCase().includes(filter.toLowerCase()),
					),
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

export default stackOverflowReducer;
