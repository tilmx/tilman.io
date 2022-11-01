import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens';
import { Animation } from './utils';

const StyledContainer = styled.div`
    display: relative;
`

const StyledImage = styled.img`
    display: block;
    width: 100%;
    border-radius: ${Size.XXS};
    margin: 0;
    padding: 0;
    border: none;
    position: relative;
    z-index: 1;
    background-color: ${props => props.theme.colors.text};
`

const StyledShadow = styled.div<{ image: string }>`
    width: 100%;
    height: ${Size.S};
    border-radius: 50%;
    margin-top: -${Size.XXS};
    background-color: ${props => props.theme.colors.text};
    background-image: url("${props => props.image}");
    background-position: bottom;
    background-size: cover;
    filter: blur(12px);
    transform: translate3d(0,0,0);
`

export const Cover: React.FunctionComponent<{ image: string; }> = props => {
    return (
        <Animation>
            <StyledContainer>
                <StyledImage src={props.image} />
                <StyledShadow image={props.image} />
            </StyledContainer>
        </Animation>
    )
}
