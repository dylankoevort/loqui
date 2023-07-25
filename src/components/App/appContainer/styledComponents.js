import { styled } from 'styled-components';

const StyledAppContainer = styled.div`
	@media screen and (min-width: 1441px) {
		position: relative;
		display: flex;
		overflow: hidden;
		margin: 0 auto;
		box-shadow: 0 6px 18px var(--shadow);

		top: 19px;
		width: calc(100vw - 38px);
		max-width: 1600px;
		height: calc(100vh - 38px);

		background-color: #264687;
		background-repeat: repeat-x;
		border-radius: 0;
		transform-origin: center;
	}
`;

export { StyledAppContainer };
