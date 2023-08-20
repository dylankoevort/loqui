import { styled } from 'styled-components';

const StyledLandingNew = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// background-color: var(--background-light);
	background-color: #eee;

	.logo {
		margin-top: -150px;

		img {
			height: 100px;
			width: 100px;
		}
	}

	.loqui {
		font-size: 70px;
		font-weight: 400;
		padding-bottom: 100px;
	}

	.form-container {
		margin: 0 10px;
		width: 80%;
		// border: 2px solid var(--accent-light);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 10px;
		padding: 20px;
		// background-color: var(--secondary-light);

		@media screen and (min-width: 600px) {
			max-width: 500px;
		}
	}

	.form {
		font-size: 80px;

		.submit-button {
			// background-color: var(--primary-light);
			background-color: #eee;
			border: 1px solid #222;
			color: #444;
			box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

			&:hover {
				// background-color: var(--primary-dark);
				background-color: #444;
			}
		}
	}
`;

export { StyledLandingNew };
