import * as React from 'react';
import styled from '@emotion/styled';
import { Size } from '../tokens/size';
import { Breakpoint } from '../tokens/breakpoint';

interface SpaceProps {
    horizontal?: Size;
    vertical?: Size;
}

function getResponsiveSize(size?: Size): { mobile?: Size, tablet?: Size } {
    switch (size) {
        case Size.XXXXXL:
            return {
                mobile: Size.XXXL,
                tablet: Size.XXXXXL
            }
        case Size.XXXXL:
            return {
                mobile: Size.XXXL,
                tablet: Size.XXXXL
            }
        default:
            return {
                mobile: size,
                tablet: size
            };
    }
}

const StyledSpace = styled.div<SpaceProps>`
	height: ${props => props.vertical};
	width: ${props => props.horizontal};
	flex-shrink: 0;
	flex-grow: 0;

    ${Breakpoint.Tablet} {
        height: ${props => getResponsiveSize(props.vertical).tablet};
        width: ${props => getResponsiveSize(props.horizontal).tablet};
    }

    ${Breakpoint.Mobile} {
        height: ${props => getResponsiveSize(props.vertical).mobile};
        width: ${props => getResponsiveSize(props.horizontal).mobile};
    }
`;

export const Space: React.FunctionComponent<SpaceProps> = props => {
    return (
        <StyledSpace horizontal={props.horizontal} vertical={props.vertical} />
    );
};
