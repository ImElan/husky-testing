import React, { useRef, useState } from 'react';

function Counter({ initialCount = 0 }) {
	// const { current: initialState } = useRef({ count: initialCount });
	const [initialState] = React.useState({ count: initialCount });
	// const [initialState] = React.useReducer((s) => s, { count: initialCount });

	const [count, setCount] = useState(initialCount);

	const increment = () => {
		setCount((count) => count + 1);
	};

	const reset = () => {
		setCount(initialState.count);
	};

	return (
		<div>
			<button onClick={increment}>{count}</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default Counter;
