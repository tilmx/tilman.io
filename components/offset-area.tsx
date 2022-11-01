import * as React from 'react';
import styled from '@emotion/styled'
import { Breakpoint } from './tokens/breakpoint';

const StyledWrapper = styled.div`
	margin-left: 40%;
	width: 60%;
	max-width: 640px;

	${Breakpoint.Tablet} {
		margin-left: 20%;
		width: 80%;
	}

	${Breakpoint.Mobile} {
		width: 100%;
		margin-left: 0;
	}

	/*p {
		max-width: 480px;

		@media @tablet {
			max-width: none;
		}
	}

	*/
}
`

export const OffsetArea: React.FunctionComponent< { children?: React.ReactNode } > = props => {
	return (
		<StyledWrapper>
			{props.children}
		</StyledWrapper>
	)
}
