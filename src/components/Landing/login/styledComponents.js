import { styled } from 'styled-components';

const StyledLogin = styled.div`
	position: relative;
	width: 100%;
	box-sizing: border-box;
	padding: 64px 60px 30px;
`;

const StyledLoginMain = styled.div`
	min-height: 40vh;
	border-bottom: 1px solid var(--border-default);

	margin-bottom: 20px;

	display: flex;
	flex-grow: 1;
	align-items: flex-start;
	justify-content: space-between;

	.left {
		margin-top: 4px;
		flex: none;
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
	}

	.right {
		margin-left: 60px;
		position: relative;

		.qr-code {
			min-height: 280px;
			min-width: 280px;

			img {
				height: 280px;
				width: 280px;
			}
		}
	}
`;

export { StyledLogin, StyledLoginMain };
