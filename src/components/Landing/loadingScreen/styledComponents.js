import { styled } from 'styled-components';

const StyledLoadingScreen = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background-color: var(--landing-page-background);
`;

const StyledContainer = styled.div`
	display: block;
	margin-left: auto;
	margin-right: auto;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;

		.center-content {
			display: block;
			margin-left: auto;
			margin-right: auto;

			position: absolute;
			top: 50%;
			bottom: 50%;
			left: 0;
			right: 0;
			width: 400px;

			.progress-bar {
				display: block;
				margin-left: auto;
				margin-right: auto;
				width: 320px;
				height: 3px;

				.MuiLinearProgress-root {
					background-color: var(--progress-background);

					.MuiLinearProgress-bar {
						background-color: var(--progress-colour);
					}
				}
			}

			p {
				font-size: 17px;
				color: var(--text-landing-title);
				text-align: center;
				margin-block-start: 0.5em;
			}
		}

		.bottom-content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-left: 15px;
			margin-right: 15px;
			position: absolute;
			bottom: 50px;
			left: 0;
			right: 0;

			.button {
				width: 100px;
				margin-left: auto;
				margin-right: auto;
			}

			p {
				font-size: 14px;
				color: var(--text-landing-title);
				text-align: center;
				margin-block-start: 0.5em;
			}
		}
	}
`;

export { StyledLoadingScreen, StyledContainer };
