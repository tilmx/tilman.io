import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';
import { EB_Garamond, Space_Grotesk, Space_Mono } from "next/font/google"
import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

interface TextProps {
    size?: TextSize;
    children?: ReactNode;
    className?: string;
    onClick?: MouseEventHandler;
    serif?: boolean;
    mono?: boolean;
}

export enum TextSize {
    Regular,
    Large,
    Huge,
}

const FontSerif = EB_Garamond({ weight: '400', style: ['normal'], subsets: ['latin'] })
const FontSans = Space_Grotesk({ weight: ['400'], style: ['normal'], subsets: ['latin'] })
const FontMono = Space_Mono({ weight: ['400'], style: ['normal'], subsets: ['latin'] })

const StyledText = styled.p<TextProps>`
    ${props => props.serif ? FontSerif.style : props.mono ? FontMono.style : FontSans.style};
    line-height: 1.2;
    margin: 0;

    ${props => props.size === TextSize.Huge && `
        font-size: 48px;

        ${Breakpoint.Tablet} {
            font-size: 40px;
        }

        ${Breakpoint.Mobile} {
            font-size: 24px;
        }
    `}

    ${props => props.size === TextSize.Large && `
        font-size: 36px;

        ${Breakpoint.Mobile} {
            font-size: 24px;
        }
    `}

    ${props => props.size === TextSize.Regular && `
        font-size: 20px;

        ${Breakpoint.Mobile} {
            font-size: 17px;
        }
    `}
`;

export const Text: FunctionComponent<TextProps> = props => {
    return (
        <StyledText mono={props.mono} serif={props.serif} size={props.size || TextSize.Regular} className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledText>
    );
};
