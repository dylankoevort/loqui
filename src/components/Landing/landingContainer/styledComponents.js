import { styled } from 'styled-components';

const StyledLandingContainer = styled.div`
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		background-color: var(--page-top-colour);
		z-index: -1;
		width: 100%;
		height: 222px;
		content: '';
	}

	padding-right: 36px;
	padding-left: 36px;

	@media screen and (max-width: 960px) {
		padding-right: 15px;
		padding-left: 15px;
	}

	@media screen and (max-width: 768px) {
		padding-right: 36px;
		padding-left: 36px;
	}

	@media screen and (max-width: 510px) {
		padding-right: 0;
		padding-left: 0;
	}
`;

const StyledLandingMain = styled.div`
	width: 1020px;
	height: 480px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 5px 3px rgba(11, 20, 26, 0.19);
	margin-left: auto;
	margin-right: auto;

	@media screen and (max-width: 1095px) {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		height: auto;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 510px) {
		border-radius: 0;
		margin-bottom: 0;
		box-shadow: none;
	}
`;

const StyledLandingHeader = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 39px;
	margin: 28px auto;
	box-sizing: border-box;

	@media screen and (min-height: 760px) and (min-width: 1095px) {
		margin-bottom: 66px;
	}

	.icon {
		display: inline-block;
		vertical-align: top;
		height: 42px;
		width: 42px;

		img {
			height: 42px;
			width: 42px;
			max-width: 100%;
			display: block;
		}
	}

	.title {
		margin-left: 14px;
		display: inline-block;
		font-size: 14px;
		font-weight: 500;
		line-height: normal;
		color: #fff;
		text-transform: uppercase;
		vertical-align: middle;
	}

	@media screen and (max-width: 510px) {
		padding-right: 36px;
		padding-left: 36px;
	}
`;

export { StyledLandingContainer, StyledLandingHeader, StyledLandingMain };
