import { styled } from 'styled-components';

const StyledLanding = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #eee;

	.logo {
		img {
			height: 100px;
			width: 100px;
		}
	}

	.loqui {
		font-size: 70px;
		font-weight: 400;
		padding-bottom: 100px;
		color: #333;
	}

	.form-container {
		margin: 0 10px;
		width: 80%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 10px;
		padding: 20px;

		@media screen and (min-width: 600px) {
			max-width: 500px;
		}
	}

	.form {
		font-size: 80px;

		.submit-button {
			background-color: #eee;
			border: 1px solid #222;
			color: #444;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

			&:hover {
				background-color: #444;
			}
		}
	}
`;

export { StyledLanding };
