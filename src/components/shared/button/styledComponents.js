import styled from 'styled-components';

const StyledButton = styled.button`
	background: ${(props) => props.bgcolour};
	color: ${(props) => (props.textcolour ? props.textcolour : 'var(--text-button)')};
	border: ${(props) => (props.border ? props.border : '1px solid transparent')};
	height: ${(props) => (props.height ? props.height : '40px')};
	width: ${(props) => (props.width ? props.width : '100px')};
	border-radius: ${(props) => (props.radius ? props.radius : '24px')};

	padding: 10px 24px;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		box-shadow: 0 2px 7px var(--shadow-button-hover);
	}
`;

export { StyledButton };
