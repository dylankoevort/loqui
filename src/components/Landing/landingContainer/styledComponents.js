import { styled } from 'styled-components';

const StyledLandingContainer = styled.div`
	z-index: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 92px;

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

	@media screen and (max-width: 1095px) {
		padding-right: 36px;
		padding-left: 36px;
		// box-sizing: border-box;
	}

	@media screen and (max-width: 960px) {
		position: relative;
	}
`;

const StyledLandingHeader = styled.div`
	display: flex;
	flex: none;
	align-items: center;
	justify-content: flex-start;
	width: 1000px;
	min-height: 39px;
	margin: 27px auto 28px;

	@media screen and (min-height: 760px) and (min-width: 1095px) {
		margin-bottom: 66px;
	}

	.icon {
		display: inline-block;
		vertical-align: top;
		min-height: 42px;
		max-height: 42px;
		min-width: 42px;
		max-width: 42px;

		img {
			min-height: 42px;
			max-height: 42px;
			min-width: 42px;
			max-width: 42px;
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
`;

const StyledLandingMain = styled.div`
	z-index: 2;
	display: flex;
	flex: none;
	flex-direction: column;
	width: 1020px;
	overflow: hidden;
	margin-right: auto;
	margin-left: auto;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 2px 5px 0 rgba(11, 20, 26, 0.19)
`;

export { StyledLandingContainer, StyledLandingHeader, StyledLandingMain };
