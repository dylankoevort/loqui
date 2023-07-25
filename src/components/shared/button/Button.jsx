import React from 'react';
import { StyledButton } from './styledComponents';

const Button = (props) => {
	const { label, bgcolour, textcolour, onClick, height, width, radius } = props;

	return (
		<StyledButton bgcolour={bgcolour} textcolour={textcolour} onClick={onClick} height={height} width={width} radius={radius}>
			{label}
		</StyledButton>
	);
};

export default Button;
