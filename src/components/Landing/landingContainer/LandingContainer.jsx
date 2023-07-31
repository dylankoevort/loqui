import React from 'react';
import { StyledLandingContainer, StyledLandingHeader, StyledLandingMain } from './styledComponents';
import Login from '../login';
import { IconWhite } from 'src/assets';

const LandingContainer = (props) => {
	return (
		<StyledLandingContainer>
			<StyledLandingHeader>
				<div className="icon">
					<img src={IconWhite} alt="Loqui" />
				</div>
				<div className="title">Loqui</div>
			</StyledLandingHeader>
			<StyledLandingMain>
				<Login {...props} />
			</StyledLandingMain>
		</StyledLandingContainer>
	);
};

export default LandingContainer;
