import { styled } from 'styled-components';

const StyledLeftPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	z-index: 101;
	overflow: visible;
	height: 100%;

	@media screen and (min-width: 1300px) {
		flex: 0 0 30%;
		max-width: 30%;
	}
`;

export { StyledLeftPanel };
