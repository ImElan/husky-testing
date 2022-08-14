import React from 'react';
import ResultItem from './ResultItem';

import './ResultsContainer.css';

function ResultsContainer(props) {
	const { results } = props;
	return (
		<div className='resultsContainer'>
			<p className='resultsContainer__title'>Covid-19 Diagnosis Report</p>
			{results.map((result, index) => (
				<ResultItem key={index} result={result} />
			))}
		</div>
	);
}

export default ResultsContainer;
