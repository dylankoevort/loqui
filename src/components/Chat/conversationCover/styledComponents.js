import { styled } from 'styled-components';

const StyledConversationCover = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	height: 100%;
	width: 100%;
	border-left: 1px solid var(--secondary);

	img {
		height: 150px;
		width: 150px;
	}

	p {
		text-align: center;
	}
`;

export { StyledConversationCover };
