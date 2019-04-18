import React, {useState} from 'react'

const Counter = props => {
	const [value, setValue] = useState(1)

	const onClickHandler = () => {
		setValue(value + 1)
	};

	return (
		<>
			<button onClick={onClickHandler}>{value}</button>
		</>
	);
};

export default Counter