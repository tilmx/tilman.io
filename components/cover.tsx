import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens/size';
import { Animation } from './utils/animation';
import { Image } from './image';
import { StaticImageData } from 'next/image';

const StyledContainer = styled.div`
    display: relative;
`

const StyledShadow = styled.div`
    width: 100%;
    height: ${Size.S};
    border-radius: 50%;
    margin-top: -${Size.XXS};
    filter: blur(12px);
    transform: translate3d(0,0,0);
    overflow: hidden;
`

export const Cover: React.FunctionComponent<{ image: StaticImageData; }> = props => {
    return (
        <Animation indicateHover>
            <StyledContainer>
                <Image image={props.image} alt="Album Cover" style={{ position: 'relative', zIndex: 1, borderRadius: Size.XXS }} />
                <StyledShadow>
                    <Image image={props.image} alt="Album Cover Shadow" style={{ position: 'absolute', bottom: 0 }} />
                </StyledShadow>
            </StyledContainer>
        </Animation>
    )
}
