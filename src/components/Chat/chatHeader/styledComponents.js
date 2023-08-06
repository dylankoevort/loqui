import { styled } from 'styled-components';

const StyledChatHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 16px;
	background-color: var(--header-panel-background);
	z-index: 1000;

	border-left: 1px solid var(--header-panel-border);

	.back-button {
		margin-right: 10px;
	}
`;

const StyledProfileImage = styled.div`
	padding-right: 15px;
	flex: none;
	// cursor: pointer;

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
		color: var(--text-default);
		font-size: 17px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.last-seen {
		text-overflow: ellipsis;
		color: var(--text-secondary);
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

export { StyledChatHeader, StyledUserDetails, StyledProfileImage, StyledIconContainer };
