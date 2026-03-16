import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import { GithubProvider } from '../modules/github';
import { StackOverflowProvider } from '../modules/stackoverflow';
import { CombinedProvider } from '../modules/combined';

const App = () => {
	return (
		<>
			<Task01 />
			<Task02 />

			<GithubProvider>
				<Task03 />
			</GithubProvider>
			<StackOverflowProvider>
				<Task04 />
			</StackOverflowProvider>

			<CombinedProvider>
				<Task05 />
			</CombinedProvider>
		</>
	);
};

export default App;
