import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackOverflowAPI } from '.';
import { stackOverflowActions } from '.';

export default function StackOverflow() {
	const gitApi = new StackOverflowAPI();
	const { saveQuestions, setUserName, setFilter, addError, clearErrors } =
		stackOverflowActions;

	const errors = useSelector(
		(state) => state.stackoverflow?.errors || state.errors || [],
	);

	const questions = useSelector(
		(state) => state.stackoverflow?.questions || state.questions || [],
	);

	const filter = useSelector(
		(state) => state.stackoverflow?.filter || state.filter || '',
	);

	const filtredQuestions = useSelector(
		(state) =>
			state.stackoverflow?.filtredQuestions || state.filtredQuestions || [],
	);

	const dispatch = useDispatch();

	const getQuestionsHandler = () => {
		gitApi
			.getRecentQuestions()
			.then((resp) => {
				dispatch(saveQuestions(resp.items));
				dispatch(clearErrors());
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};

	const changeFilterHandler = (e) => {
		const { value } = e.target;
		dispatch(setFilter(value));
	};

	const listContent = (items) => {
		return items.map((item) => (
			<li key={item.question_id}>
				<a href={item.link}> {item.title}</a>
				<br />
				User: {item.owner.display_name} - (rating: {item.owner.reputation})
			</li>
		));
	};

	return (
		<>
			<button onClick={getQuestionsHandler}>
				Pobierz ostatnie 30 zapytania
			</button>
			<br />
			<label htmlFor="question-filter">
				Filtruj:{' '}
				<input
					id="questions-filter"
					name="question-filter"
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

				{errors.length <= 0 && listContent(filtredQuestions)}

				{errors.length <= 0 && !filter && listContent(questions)}
			</ul>
		</>
	);
}
