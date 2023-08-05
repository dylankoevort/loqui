import { styled } from 'styled-components';

const StyledLogin = styled.div`
	position: relative;
	width: 100%;
	box-sizing: border-box;
	padding: 64px 60px 30px;

	@media screen and (max-width: 910px) {
		padding: 64px 50px 30px;
	}

	@media screen and (max-width: 768px) {
		padding: 25px 50px 30px;
		margin-bottom: 0;
	}

	@media screen and (max-width: 380px) {
		padding: 25px 50px 30px;
	}

	@media screen and (max-width: 380px) {
		padding: 20px 30px 30px;
	}
`;

const StyledLoginMain = styled.div`
	margin-bottom: 20px;

	display: grid;
	grid-template-columns: 1fr 1fr;

	.left {
		margin-top: 4px;
		max-width: 556px;
		height: 260px;
		max-height: 260px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.title {
			margin-bottom: 24px;
			font-size: 28px;
			font-weight: 300;
			line-height: normal;
			color: var(--text-landing-title);
		}

		.steps-text {
			font-size: 18px;
			font-weight: 400;
			line-height: 28px;
			color: var(--text-landing-steps);
			margin: 10px;

			p {
				margin-block-start: 0.5em;
				margin-block-end: 0.5em;
			}
		}

		.google-sign-in {
			button {
				margin-top: 20px;
				display: block;
				margin-left: auto;
				margin-right: auto;
				background-color: var(--google-red);
			}
		}

		@media screen and (max-width: 769px) {
			display: block;
		}
	}

	.right {
		position: relative;
		margin-right: 0;
		margin-left: auto;

		.qr-code {
			height: 280px;
			width: 280px;

			img {
				height: 280px;
				width: 280px;
				max-width: 100%;
				display: block;
			}
		}
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;

		.right {
			margin-right: auto;
			margin-left: auto;
		}
	}

	@media screen and (max-width: 590px) {
		gap: 40px;
	}
`;

export { StyledLogin, StyledLoginMain };
