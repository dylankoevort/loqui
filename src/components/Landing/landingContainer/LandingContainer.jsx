import React from 'react';
import { StyledLandingContainer, StyledLandingHeader, StyledLandingMain } from './styledComponents';
import Login from '../login';
import { WhatsAppIcon } from 'src/assets';

const LandingContainer = (props) => {
	return (
		<StyledLandingContainer>
			<StyledLandingHeader>
				<div className="icon">
					<img src={WhatsAppIcon} alt="WhatsApp" />
				</div>
				<div className="title">not-Whatsapp Web</div>
			</StyledLandingHeader>
			<StyledLandingMain>
				<Login {...props} />
			</StyledLandingMain>
		</StyledLandingContainer>
	);
};

export default LandingContainer;
