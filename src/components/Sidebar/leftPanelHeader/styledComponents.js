import { styled } from 'styled-components';

const StyledLeftPanelHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 16px;
	background-color: var(--header-panel-background);
	z-index: 1000;
`;

const StyledProfileImage = styled.div`
	flex-grow: 1;

	.image-container {
		position: relative;
		height: 40px;
		width: 40px;
		display: block;
	}

	.image {
		display: block;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		visibility: visible;
		overflow-y: hidden;
		opacity: 1;
		transition: opacity 0.15s ease-out;
		border: 1px solid white;

		img {
			height: 40px;
			width: 40px;
			max-width: 100%;
			display: block;
		}
	}
`;

const StyledIconContainer = styled.div`
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

export { StyledLeftPanelHeader, StyledProfileImage, StyledIconContainer };
