import React from 'react';
import { DotPulse } from '@uiball/loaders';
import { StyledLoading } from './styledComponents';

const Loading = () => {
	return (
		<StyledLoading>
			<DotPulse size={60} speed={1.3} color="black" />
		</StyledLoading>
	);
};

export default Loading;
