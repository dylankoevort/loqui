import { styled } from 'styled-components';

const StyledChatView = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`;

const StyledAppContainer = styled.div`
	position: relative;
	display: flex;
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 50px;
	box-shadow: 0 2px 5px 3px rgba(11, 20, 26, 0.19);

	top: 19px;
	width: calc(100vw - 38px);
	max-width: 1600px;
	height: calc(100vh - 65px);

	background-color: #264687;
	background-repeat: repeat-x;
	border-radius: 10px;
	transform-origin: center;

	@media screen and (max-width: 768px) {
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 0;
		background-color: white;
	}
`;

export { StyledChatView, StyledAppContainer };
