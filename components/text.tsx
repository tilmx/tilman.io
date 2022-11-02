import * as React from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';
import { Lora } from '@next/font/google'
import { Inter } from '@next/font/google'
import { Color, Size } from './tokens';

interface TextProps {
    size?: TextSize;
    color?: string;
    center?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    sansserif?: boolean;
    indent?: boolean
}

export enum TextSize {
    Huge,
    Large,
    Regular,
    Small,
    SuperSmall,
}

const FontSerif = Lora({ weight: '500', style: ['normal', 'italic'], subsets: [ 'latin' ] })
const FontSans = Inter({ weight: '500', subsets: [ 'latin' ] })

const StyledText = styled.div<TextProps>`
    ${props => props.sansserif ? FontSans.style : FontSerif.style}
    line-height: 1.4;
    ${props => props.center && 'text-align: center;'}
    color: ${props => props.color || Color.Text};
    margin: 0;
    font-weight: 500;
	cursor: inherit;

    ${props => props.size === TextSize.Huge && `
        font-size: 68px;
        line-height: 1.2;

        ${Breakpoint.Tablet} {
            font-size: 56px;
        }

        ${Breakpoint.Mobile} {
            font-size: 40px;
        }
    `}

    ${props => props.size === TextSize.Large && `
        font-size: 36px;
        line-height: 1.3;
        text-underline-offset: 5px;

        ${Breakpoint.Tablet} {
            font-size: 24px;
        }
    `}

    ${props => props.size === TextSize.Regular && `
        font-size: 20px;
        text-underline-offset: 5px;
    `}

    ${props => props.size === TextSize.Small && `
        font-size: 16px;
    `}

    ${props => props.size === TextSize.SuperSmall && `
        font-size: 13px;
        text-underline-offset: 3px;
    `}

    ${props => props.indent && `
        text-indent: min(10vw, ${Size.XXXL});

        ${Breakpoint.Mobile} {
            text-indent: 0;
        }
    `} 
`;

export const Text: React.FunctionComponent<TextProps> = props => {
    return (
        <StyledText size={props.size || TextSize.Regular} {...props}>
            {props.children}
        </StyledText>
    );
};
