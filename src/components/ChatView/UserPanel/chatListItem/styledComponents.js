import { styled } from 'styled-components';

const StyledChatListItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	height: 72px;
	pointer-events: all;

	height: 72px;
	width: 100%;
	cursor: pointer;

	&:hover {
		background-color: #ddd;
	}
`;

const StyledProfileImage = styled.div`
	display: flex;

	.image-container {
		padding: 0 15px 0 13px;
		display: flex;
		flex: none;
		align-items: center;
	}

	.image {
		position: relative;
		height: 50px;
		width: 50px;

		img {
			height: 50px;
			width: 50px;
			max-width: 100%;
			display: block;
			border-radius: 50%;
		}
	}
`;

const StyledContentContainer = styled.div`
	display: flex;
	flex-basis: auto;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	min-width: 0;
	border-top: 1px solid var(--secondary);
	padding-right: 15px;
`;

const StyledPrimaryRow = styled.div`
	display: flex;
	align-items: center;
	line-height: normal;
	text-align: left;

	.name {
		display: flex;
		flex-grow: 1;
		font-weight: 400;
		font-size: 17px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.time-stamp {
		margin-top: 3px;
		margin-left: 6px;
		line-height: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex: none;
		max-width: 100%;
		font-size: 12px;
		line-height: 20px;
	}
`;
const StyledSecondaryRow = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2px;
	min-height: 20px;
	font-size: 13px;
	line-height: 20px;
	.message {
		flex-grow: 1;
		overflow: hidden;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
	}
`;

export { StyledChatListItem, StyledProfileImage, StyledContentContainer, StyledPrimaryRow, StyledSecondaryRow };
