import * as React from 'react';
import styled from '@emotion/styled'

const StyledWrapper = styled.div<{ width?: string }>`
    max-width: ${props => props.width || '640px'};
    margin: 0 auto;
`

export const WidthLimiter: React.FunctionComponent<{ children: React.ReactNode; width?: string; }> = props => {
    return (
        <StyledWrapper width={props.width}>
            {props.children}
        </StyledWrapper>
    )
}
