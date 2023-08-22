import { styled } from 'styled-components';

const StyledUsersPanel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	z-index: 101;
	overflow: visible;
	height: 100%;
	border-right: 1px solid var(--secondary);
	background-color: #f7f7f7;

	@media screen and (min-width: 960px) {
		flex: 0 0 30%;
		max-width: 30%;
	}

	@media screen and (min-width: 960px) {
		flex: 0 0 30%;
		max-width: 30%;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;

		border: 2px solid var(--secondary);
	}
`;

const StyledUsersPanelHeader = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 60px;
	width: 100%;
	box-sizing: border-box;
	padding: 10px 16px;
	z-index: 1000;

	h4 {
		font-weight: 500;
		margin-left: 10px;
		margin-right: 10px;
		text-align: right;
	}
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

		box-shadow: 0 1px 0px 1px rgba(11, 20, 26, 0.19);

		// img {
		// 	height: 40px;
		// 	width: 40px;
		// 	max-width: 100%;
		// 	display: block;
		// }
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

const StyledUsersList = styled.div`
    width 100%;
    height: 100%;
    overflow-y: auto;
	margin-top: -1px;
`;

const StyledSearchBar = styled.div`
	padding-left: 12px;
	position: relative;
	z-index: 100;
	box-sizing: border-box;
	display: flex;
	flex: none;
	align-items: center;
	height: 49px;
	transition: box-shadow 0.18s ease-out, background-color 0.25s ease-out;
	border-bottom: 1px solid var(--secondary);

	h4 {
		font-weight: 600;
	}
`;

const StyledInfoMessage = styled.div`
	margin: 15px 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
	box-sizing: border-box;
	border-top: 1px solid var(--secondary);

	.text{
		white-space: normal;
		font-weight: normal;
		font-size: 0.75rem;
		word-break: break-word;
		line-height: 1.3333;
		text-align: center;
`;

export { StyledUsersPanel, StyledUsersPanelHeader, StyledProfileImage, StyledIconContainer, StyledUsersList, StyledSearchBar, StyledInfoMessage };
