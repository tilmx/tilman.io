import * as React from 'react';
import styled from '@emotion/styled'

const StyledWrapper = styled.div<{ width?: string; center?: boolean; }>`
    max-width: ${props => props.width || '640px'};
    ${props => props.center && `margin: 0 auto;`};
`

export const WidthLimiter: React.FunctionComponent<{ children: React.ReactNode; width?: string; center?: boolean; }> = props => {
    return (
        <StyledWrapper width={props.width} center={props.center}>
            {props.children}
        </StyledWrapper>
    )
}
