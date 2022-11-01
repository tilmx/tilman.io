import * as React from 'react';
import styled from '@emotion/styled'

const StyledLogoWrapper = styled.div`
	width: 40px;
	height: 40px;
	position: relative;
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
