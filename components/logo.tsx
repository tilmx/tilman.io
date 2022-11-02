import * as React from 'react';
import styled from '@emotion/styled'
import { Breakpoint, Color, Size } from './tokens';

const StyledLogoWrapper = styled.div`
	width: 40px;
	height: 40px;

	position: absolute;
	left: ${Size.L};
	top: ${Size.L};

	${Breakpoint.Mobile} {
		left: ${Size.M};
		top: ${Size.M};
	}

	&:hover {
		> div {
			background-color: ${Color.Accent};
			-moz-animation: logohorizontal 0.5s;
			-webkit-animation: logohorizontal 0.5s;
			animation: logohorizontal 0.5s;
		}
		> div:first-child {
			background-color: inherit;
			border-color: ${Color.Accent};
			-moz-animation: logoborder 0.5s;
			-webkit-animation: logoborder 0.5s;
			animation: logoborder 0.5s;
		}
		> div:last-child {
			background-color: ${Color.Accent};
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
	border: 4px solid ${Color.Text};
	border-radius: 50%;
	box-sizing: border-box;
	transition: border-color .2s;
`
const StyledLogoHorizontal = styled.div`
	position: absolute;
	width: 16px;
	height: 4px;
	top: 12px;
	left: 12px;
	background-color: ${Color.Text};
	transition: background-color .2s;
`

const StyledLogoVertical = styled.div`
	position: absolute;
	width: 4px;
	height: 15px;
	top: 14px;
	left: 18px;
	background-color: ${Color.Text};
	transition: background-color .2s;
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
