import * as React from 'react';
import styled from '@emotion/styled'

const StyledBackgroundColor = styled.div`
    background-color: ${props => props.color};
`

export const BackgroundColor: React.FunctionComponent<{ color: string; children?: React.ReactNode; style?: React.CSSProperties }> = props => {
    return (
        <StyledBackgroundColor color={props.color} style={props.style}>
            {props.children}
        </StyledBackgroundColor>
    )
}
