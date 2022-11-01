import * as React from 'react';
import styled from '@emotion/styled';

interface CenterProps {
	vertical?: boolean;
	horizontal?: boolean;
	children?: React.ReactNode;
}

const StyledCenter = styled.div<CenterProps>`
	display: flex;
	flex-direction: column;

	${props => props.horizontal && `
		align-items: center;
		text-align: center;
	`}

	${props => props.vertical && `
		justify-content: center;
		height: 100%;
	`}
`;

export const Center: React.FunctionComponent<CenterProps> = props => {
	return (
		<StyledCenter {...props}>{props.children}</StyledCenter>
	);
};
