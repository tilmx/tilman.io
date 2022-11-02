import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens/size';
import { Animation } from './utils/animation';
import { Image } from './image';
import { StaticImageData } from 'next/image';

const StyledContainer = styled.div`
    display: relative;
`

export const EmojiHover: React.FunctionComponent<{ image: StaticImageData; }> = props => {
    return (
        <div>Hallo</div>
    )
}
