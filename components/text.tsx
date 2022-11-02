import * as React from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';
import { Manrope as ManropeFont } from '@next/font/google'

interface TextProps {
    size?: TextSize;
    color?: string;
    center?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export enum TextSize {
    Huge,
    Large,
    Regular,
    Small,
    SuperSmall,
}

const Manrope = ManropeFont({
    weight: '600',
})

const StyledText = styled.div<TextProps>`
    ${Manrope.style};
    line-height: 1.4;
    ${props => props.center && 'text-align: center;'}
    color: ${props => props.color || props.theme.colors.text};
    margin: 0;
	cursor: inherit;

    ${props => props.size === TextSize.Huge && `
        font-size: 50px;

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
        font-size: 12px;
    `}
`;

export const Text: React.FunctionComponent<TextProps> = props => {
    return (
        <StyledText size={props.size || TextSize.Regular} {...props} >
            {props.children}
        </StyledText>
    );
};
