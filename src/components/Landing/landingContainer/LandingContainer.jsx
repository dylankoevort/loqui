import React from 'react';
import { StyledLandingContainer, StyledLandingHeader, StyledLandingMain } from './styledComponents';
import Login from '../login';
import { IconWhite } from 'assets';

const LandingContainer = (props) => {
	return (
		<StyledLandingContainer id="landing-container">
			<StyledLandingHeader id="landing-header">
				<div className="icon">
					<img src={IconWhite} alt="Loqui" />
				</div>
				<div className="title">Loqui</div>
			</StyledLandingHeader>
			<StyledLandingMain id="landing-main">
				<Login {...props} />
			</StyledLandingMain>
		</StyledLandingContainer>
	);
};

export default LandingContainer;
