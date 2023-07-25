import { styled } from 'styled-components';

const StyledAppLayout = styled.div`
	position: relative;
	z-index: 100;
	width: 100%;
	height: 100%;
	overflow: hidden;

	@media screen and (min-width: 1441px) {
		&::after {
			background-color: var(--page-top-colour);
			position: fixed;
			top: 0;
			z-index: -1;
			width: 100%;
			height: 127px;
			content: '';
		}
	}
`;

export { StyledAppLayout };
