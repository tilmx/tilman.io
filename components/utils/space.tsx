import * as React from 'react';
import styled from '@emotion/styled';
import { Size } from '../tokens/size';

interface SpaceProps {
    horizontal?: Size;
    vertical?: Size;
}

const StyledSpace = styled.div<SpaceProps>`
	height: ${props => props.vertical};
	width: ${props => props.horizontal};
	flex-shrink: 0;
	flex-grow: 0;
`;

export const Space: React.FunctionComponent<SpaceProps> = props => {
    return (
        <StyledSpace horizontal={props.horizontal} vertical={props.vertical} />
    );
};
