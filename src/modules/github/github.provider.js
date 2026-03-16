import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './github.reducer';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function GithubProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
