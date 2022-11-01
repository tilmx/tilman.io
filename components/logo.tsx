import * as React from 'react';
import styled from '@emotion/styled'

const StyledLogoWrapper = styled.div`
	width: 40px;
	height: 40px;
	position: relative;

	&:hover {
		> div {
			-moz-animation: logohorizontal 0.5s;
			-webkit-animation: logohorizontal 0.5s;
			animation: logohorizontal 0.5s;
		}
		> div:first-child {
			-moz-animation: logoborder 0.5s;
			-webkit-animation: logoborder 0.5s;
			animation: logoborder 0.5s;
		}
		> div:last-child {
			-moz-animation: logovertical 0.5s;
			-webkit-animation: logovertical 0.5s;
			animation: logovertical 0.5s;
		}
	}

	// ANIMATIONS
	@-webkit-keyframes logoborder {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@-webkit-keyframes logohorizontal {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
			height: 4px;
		}
		40% {
			transform: translate3d(25px, 0, 0);
			height: 0;
		}
		60% {
			transform: translate3d(-25px, 0, 0);
			height: 0;
		}
	}

	@-webkit-keyframes logovertical {
		0%,
		100% {
			transform: translate3d(0, 0, 0);
			width: 4px;
		}
		40% {
			transform: translate3d(0, 25px, 0);
			width: 0;
		}
		60% {
			transform: translate3d(0, -25px, 0);
			width: 0;
		}
	}
`

const StyledLogoOutline = styled.div`
	width: 100%;
	height: 100%;
	border: 4px solid ${props => props.theme.colors.text};
	border-radius: 50%;
	box-sizing: border-box;
`
const StyledLogoHorizontal = styled.div`
	position: absolute;
	width: 16px;
	height: 4px;
	top: 12px;
	left: 12px;
	background-color: ${props => props.theme.colors.text};
`

const StyledLogoVertical = styled.div`
	position: absolute;
	width: 4px;
	height: 15px;
	top: 14px;
	left: 18px;
	background-color: ${props => props.theme.colors.text};
`

export const Logo: React.FunctionComponent = () => {
	return (
		<StyledLogoWrapper>
			<StyledLogoOutline />
			<StyledLogoHorizontal />
			<StyledLogoVertical />
		</StyledLogoWrapper>
	)
}
