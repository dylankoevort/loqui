import { styled } from 'styled-components';

const StyledMessageRow = styled.div`
	position: relative;
	padding-right: 9%;
	padding-left: 9%;
	margin-bottom: 2px;
	display: flex;
	flex-direction: column;
	-webkit-user-select: text;
	-moz-user-select: text;
	user-select: text;
	margin-top: 5px;
	margin-bottom: 5px;

	&.message-out {
		align-items: flex-end;
	}

	&.message-in {
		align-items: flex-start;
	}

	@media screen and (max-width: 768px) {
		padding-right: 4%;
		padding-left: 4%;
	}
`;

const StyledMessage = styled.div`
	margin-bottom: 0;
	border-radius: 7.5px;
	position: relative;
	flex: none;
	font-size: 14.2px;
	line-height: 19px;
	max-width: 90%;

	@media screen and (min-width: 1301px) {
		max-width: 65%;
	}

	.message-bubble {
		box-shadow: 0 1px 2px var(--shadow);
		border-radius: 7.5px;
		position: relative;
		z-index: 200;
		font-weight: 500;
		box-shadow: 0 1px 2px #555;

		&.outgoing {
			background-color: #b4d7ff;
			border-top-right-radius: 0;
			// border: 2px solid black;
		}

		&.incoming {
			background-color: white;
			border-top-left-radius: 0;
		}

		.message {
			display: flex;
			flex-direction: column;
			padding-left: 9px;
			padding-right: 7px;
			user-select: text;
			-moz-user-select: text;
			-webkit-user-select: text;
			-ms-user-select: text;
			padding-bottom: 15px;
			padding-top: 6px;
			box-sizing: border-box;

			.text {
				position: relative;
				overflow-wrap: break-word;
				white-space: pre-wrap;
				margin-right: 30px;

				@media screen and (max-width: 768px) {
					margin-right: 10px;
				}
			}

			.timestamp {
				margin-left: 4px;
				margin-right: 0;
				position: relative;
				justify-content: flex-end;
				margin-bottom: -5px;
				display: flex;
				font-size: 0.6875rem;
				white-space: nowrap;
				align-items: center;
				height: 15px;
				line-height: 15px;
				margin-top: 2px;
				margin-right: 5px;
			}
		}
	}

	.message-padding {
		padding: 0 4px;
		margin-top: -13px;
		position: absolute;
		top: 50%;
		width: 101px;
		display: flex;
		flex-direction: row;
		min-height: 0;
		min-width: 0;
		justify-content: flex-end;
		align-items: center;
		flex-wrap: nowrap;

		&.outgoing {
			left: -108px;
		}

		&.incoming {
			right: -108px;
		}
	}
`;

export { StyledMessageRow, StyledMessage };
