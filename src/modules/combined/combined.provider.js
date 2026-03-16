import React from 'react';
import { Provider } from 'react-redux';
import reducers from './combined.reducer';
import { createStore } from 'redux';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default function CombinedProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
