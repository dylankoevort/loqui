import React from 'react';
import { StyledComingSoon } from './styledComponents';
import { IconClear } from 'assets';

const ComingSoon = () => {
	return (
		<StyledComingSoon>
			<span className="logo">
				<img src={IconClear} alt="Loqui" />
			</span>
			<span className="loqui">Loqui Chat</span>
			<span className="coming-soon">Coming Soon</span>
			<span className="copyright">© 2023 | Dylan Koevort</span>
		</StyledComingSoon>
	);
};

export default ComingSoon;
