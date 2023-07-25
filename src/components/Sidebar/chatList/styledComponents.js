import { styled } from 'styled-components';

const StyledChatList = styled.div`
	background-color: var(--background-default);
    width 100%;
    height: 100%;
    overflow-y: auto;
	margin-top: -1px;
`;

const StyledSearchBar = styled.div`
	background-color: var(--background-default);
	padding-left: 12px;
	position: relative;
	z-index: 100;
	box-sizing: border-box;
	display: flex;
	flex: none;
	align-items: center;
	height: 49px;
	transition: box-shadow 0.18s ease-out, background-color 0.25s ease-out;
	border-bottom: 1px solid var(--chat-list-border);
`;

const StyledInfoMessage = styled.div`
	margin: 15px 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	box-sizing: border-box;
	border-top: 1px solid var(--chat-list-border);

	.text{
		white-space: normal;
		font-weight: normal;
		font-size: 0.75rem;
		word-break: break-word;
		line-height: 1.3333;
`;

export { StyledChatList, StyledSearchBar, StyledInfoMessage };
