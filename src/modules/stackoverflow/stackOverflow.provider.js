import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './stackOverflow.reducer';

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function StackOverflowProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
