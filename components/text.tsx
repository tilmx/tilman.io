import * as React from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';
import { Lora } from '@next/font/google'
import { DM_Sans } from '@next/font/google'

interface TextProps {
    size?: TextSize;
    color?: string;
    center?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    sansserif?: boolean;
}

export enum TextSize {
    Huge,
    Large,
    Regular,
    Small,
    SuperSmall,
}

const FontSerif = Lora({ style: ['normal', 'italic'] })
const FontSansSerif = DM_Sans({ weight: '400' })

const StyledText = styled.div<TextProps>`
    ${props => props.sansserif ? FontSansSerif.style : FontSerif.style};
    line-height: 1.4;
    ${props => props.center && 'text-align: center;'}
    color: ${props => props.color || props.theme.colors.text};
    margin: 0;
    font-weight: 400;
	cursor: inherit;

    ${props => props.size === TextSize.Huge && `
        font-size: 50px;
        line-height: 1.2;
        font-weight: 500;

        ${Breakpoint.Mobile} {
            font-size: 30px;
        }
    `}

    ${props => props.size === TextSize.Large && `
        font-size: 25px;
    `}

    ${props => props.size === TextSize.Regular && `
        font-size: 20px;
    `}

    ${props => props.size === TextSize.Small && `
        font-size: 16px;
    `}

    ${props => props.size === TextSize.SuperSmall && `
        font-size: 13px;
    `}
`;

export const Text: React.FunctionComponent<TextProps> = props => {
    return (
        <StyledText size={props.size || TextSize.Regular} {...props} >
            {props.children}
        </StyledText>
    );
};
