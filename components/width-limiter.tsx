import * as React from 'react';
import styled from '@emotion/styled'

const StyledWrapper = styled.div`
    max-width: 640px;
    margin: 0 auto;
`

export const WidthLimiter: React.FunctionComponent<{ children: React.ReactNode }> = props => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}
