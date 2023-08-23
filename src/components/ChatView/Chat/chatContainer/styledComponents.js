import { styled } from 'styled-components';

const StyledChatContainer = styled.div`
	height: 100%;
	width: 100%;
	border-left: 1px solid var(--secondary);

	@media screen and (max-width: 768px) {
		border: 1px solid var(--secondary);
	}
`;

const StyledChatHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 16px;
	z-index: 1000;

	border-bottom: 1px solid var(--secondary);

	.back-button {
		margin-right: 10px;
	}
`;

const StyledProfileImage = styled.div`
	padding-right: 15px;
	flex: none;

	.image-container {
		position: relative;
		height: 40px;
		width: 40px;
		display: block;

		border-radius: 50%;
		border: 1px solid white;

		img {
			height: 40px;
			width: 40px;
			max-width: 100%;
			display: block;
			border-radius: 50%;
		}
	}
`;

const StyledUserDetails = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	min-width: 0;
	// cursor: pointer;

	.name {
		overflow: hidden;
		font-size: 17px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.last-seen {
		text-overflow: ellipsis;
		font-size: 13px;
		min-height: 20px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const StyledIconContainer = styled.div`
	margin-left: 20px;
	display: flex;
	flex: none;
	align-items: center;
	color: var(--header-panel-icon);

	.icon {
		display: flex;
		align-items: center;
		margin-left: 10px;
		border-radius: 50%;
		position: relative;
		flex: none;
		height: 100%;
		transition: background-color 0.3s ease;
		height: 40px;
		width: 40px;
	}

	.icon:first-of-type {
		margin-left: 0;
	}
`;

const StyledMessageContainer = styled.div`
	height: calc(100% - 122px);
	width: 100%;

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

const StyledChatFooter = styled.footer`
	position: relative;
	min-height: 60px;
	width: 100%;
	box-sizing: border-box;
	flex: none;
	z-index: 1000;
	border-top: 1px solid var(--secondary);

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
		padding: 7px 12px;
		margin: 5px 8px;
		border: 1px solid var(--secondary);
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
				background: none;

				&::placeholder {
					opacity: 1;
				}

				&:-ms-input-placeholder {
				}

				&::-ms-input-placeholder {
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

export {
	StyledChatContainer,
	StyledChatHeader,
	StyledProfileImage,
	StyledUserDetails,
	StyledIconContainer,
	StyledMessageContainer,
	StyledChatFooter,
	StyledFooterActions,
	StyledIcons,
	StyledComposeMessage
};
