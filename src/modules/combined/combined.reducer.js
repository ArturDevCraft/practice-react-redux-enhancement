import { combineReducers } from 'redux';
import { githubReducer } from '../github';
import { stackOverflowReducer } from '../stackoverflow';

const reducers = combineReducers({
	github: githubReducer,
	stackoverflow: stackOverflowReducer,
});

export default reducers;
