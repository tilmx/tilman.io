import * as React from 'react';
import NextImage, { StaticImageData } from 'next/image'

interface ImageProps {
    image: StaticImageData;
    alt: string;
    style?: React.CSSProperties
}

export const Image: React.FunctionComponent<ImageProps> = props => {
    return (
        <NextImage src={props.image} alt={props.alt} placeholder='blur' style={{ display: 'block', width: '100%', height: 'auto', margin: '0', padding: '0', border: 'none', ...props.style}} />
    )
}
