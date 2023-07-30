import { styled } from 'styled-components';

const StyledChatFooter = styled.footer`
	position: relative;
	min-height: 60px;
	width: 100%;
	box-sizing: border-box;
	flex: none;
	z-index: 1000;
	background-color: var(--header-panel-background);
	border-left: 1px solid var(--border-default);

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	padding: 5px 16px;
	visibility: visible;
`;

const StyledFooterActions = styled.div`
	position: relative;
	flex: 1;
	width: 100%;
	min-width: 0;
	min-height: 52px;
	display: flex;
	align-items: flex-end;
`;

const StyledIcons = styled.div`
	padding: 5px 0;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 52px;
	color: var(--header-panel-icon);
	will-change: width;
	visibility: visible;
	transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const StyledComposeMessage = styled.div`
	display: flex;
	flex: 1;
	align-items: flex-end;
	min-width: 0;

	.message-input {
		padding: 9px 12px;
		margin: 5px 8px;
		background-color: var(--chat-message-compose-background);
		border: 1px solid var(--chat-message-compose-background);
		border-radius: 8px;
		box-sizing: border-box;
		flex: 1 1 auto;
		width: inherit;
		min-width: 0;
		height: 40px;
		min-height: 20px;
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		outline: none;
		will-change: width;
		display: flex;

		.input-field {
			width: 100%;
			position: relative;

			input {
				outline: none;
				width: 100%;
				max-height: 7.35em;
				min-height: 1.47em;
				user-select: text;
				white-space: pre-wrap;
				word-break: break-word;
				line-height: 1.47em;
				overflow-x: hidden;
				overflow-y: auto;
				font-size: 0.9375rem;
				border: none;
				color: var(--chat-message-compose-colour);

				&::placeholder {
					color: var(--chat-message-placeholder);
					opacity: 1;
				}

				&:-ms-input-placeholder {
					color: var(--chat-message-placeholder);
				}

				&::-ms-input-placeholder {
					color: var(--chat-message-placeholder);
				}
			}
		}
	}

	.send-message {
		padding: 5px 0;
		width: 40px;
		min-width: 40px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 52px;
	}
`;

export { StyledChatFooter, StyledFooterActions, StyledIcons, StyledComposeMessage };
