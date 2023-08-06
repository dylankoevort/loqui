import { styled } from 'styled-components';

const StyledMessageContainer = styled.div`
	background: var(--chat-background);
	height: calc(100% - 122px);
	width: 100%;

	border: 1px solid var(--border-default);
	display: flex;
	position: relative;
	z-index: 1;
	flex: 1 1 0;

	box-sizing: border-box;

	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
	transition: background 0.3s ease-out 0.1s;
	padding-left: 0;
	padding-bottom: 8px;

	h4 {
		text-align: center;
		color: var(--conversation-cover-text);
	}
`;

export { StyledMessageContainer };
