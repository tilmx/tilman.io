import * as React from 'react';
import { StaticImageData } from 'next/image'
import ExportedImage from "next-image-export-optimizer";


interface ImageProps {
    image: StaticImageData;
    alt: string;
    sizes?: string;
    style?: React.CSSProperties
}

export const Image: React.FunctionComponent<ImageProps> = props => {
    return (
        <ExportedImage src={props.image} sizes={props.sizes || "100vw"} alt={props.alt} placeholder='blur' style={{ display: 'block', width: '100%', height: 'auto', margin: '0', padding: '0', border: 'none', ...props.style}} />
    )
}
