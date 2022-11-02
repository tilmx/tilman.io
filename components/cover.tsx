import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens/size';
import { Animation } from './utils/animation';
import { Image } from './image';
import { StaticImageData } from 'next/image';

const StyledContainer = styled.div`
    display: relative;
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

export const Cover: React.FunctionComponent<{ image: StaticImageData; }> = props => {
    return (
        <Animation>
            <StyledContainer>
                <Image image={props.image} alt="Album Cover" style={{ position: 'relative', zIndex: 1, borderRadius: Size.XXS }} />
                <StyledShadow image={props.image.src} />
            </StyledContainer>
        </Animation>
    )
}
