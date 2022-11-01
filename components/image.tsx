import * as React from 'react';
import styled from '@emotion/styled'

const StyledImage = styled.img`
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: ${props => props.theme.colors.text};
`

export const Image: React.FunctionComponent<{ image: string; style?: React.CSSProperties }> = props => {
    return (
        <StyledImage src={props.image} style={props.style} />
    )
}
