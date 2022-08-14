import React from 'react';
import ResultItemBox from './ResultItemBox';

import './ResultItem.css';

function ResultItem(props) {
	const { result } = props;

	const getIconForModality = (property) => {
		switch (property) {
			case 'cough':
				return 'cough';
			case 'breathing':
				return 'breath';
			case 'speech':
				return 'microphone';
			case 'CT Scan':
				return 'ct-scan';
			case 'X-Ray':
				return 'x-ray';
			default:
				break;
		}
	};

	const resultItemBoxItems = [];

	for (const property in result) {
		const icon = getIconForModality(property);
		if (property !== 'result') {
			resultItemBoxItems.push({ icon, modality: property, finding: result[property] });
		}
	}

	return (
		<div className='resultItemContainer'>
			<div className='resultItemContainer__headings'>
				<p className='resultItemContainer__headings--modality'>Modality</p>
				<p className='resultItemContainer__headings--findings'>Finding</p>
			</div>
			{resultItemBoxItems.map((resultItemBoxItem) => (
				<ResultItemBox {...resultItemBoxItem} />
			))}
			<p className='resultItemContainer__result'>{result.result}</p>
		</div>
	);
}

export default ResultItem;
