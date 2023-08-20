import { styled } from 'styled-components';

const StyledComingSoon = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: var(--background-light);
	text-align: center;

	.logo {
		img {
			height: 100px;
			width: 100px;
		}
	}

	.loqui {
		font-size: 100px;
		font-weight: 400;
		padding-bottom: 15%;
	}

	.coming-soon {
		font-size: 70px;
		font-weight: 800;
	}

	.copyright {
		position: absolute;
		bottom: 0;
		padding: 10px;
		font-size: small;
		font-weight: bold;
	}
`;

export { StyledComingSoon };
