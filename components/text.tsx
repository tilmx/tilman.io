import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';
import { EB_Garamond } from "next/font/google"
import { CSSProperties, FunctionComponent, MouseEventHandler, ReactNode } from 'react';

interface TextProps {
    size?: TextSize;
    children?: ReactNode;
    className?: string;
    onClick?: MouseEventHandler;
}

export enum TextSize {
    Regular,
    Large,
}

const FontSerif = EB_Garamond({ weight: '400', style: ['normal', 'italic'], subsets: ['latin'] })

const StyledText = styled.p<TextProps>`
    ${FontSerif.style}
    line-height: 1.2;
    margin: 0;

    ${props => props.size === TextSize.Large && `
        font-size: 48px;

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
        <StyledText size={props.size || TextSize.Regular} className={props.className} onClick={props.onClick}>
            {props.children}
        </StyledText>
    );
};
