import React, { useState } from 'react';

function Input(props) {
	const { initialValue } = props;
	const [value, setValue] = useState(initialValue);

	const handleChange = (event) => {
		console.log('onchange called');
		setValue(event.target.value);
	};

	return (
		<div>
			<input type='text' value={value} onChange={handleChange} />
		</div>
	);
}

export default Input;
