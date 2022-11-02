import * as React from 'react';
import styled from '@emotion/styled'
import { Breakpoint } from './tokens/breakpoint';

const StyledWrapper = styled.div`
	margin-left: 30%;
	width: 60%;
	max-width: 720px;

	${Breakpoint.Tablet} {
		margin-left: 20%;
		width: 80%;
	}

	${Breakpoint.Mobile} {
		width: 100%;
		margin-left: 0;
	}
`;

export const OffsetArea: React.FunctionComponent< { children?: React.ReactNode } > = props => {
	return (
		<StyledWrapper>
			{props.children}
		</StyledWrapper>
	)
}
