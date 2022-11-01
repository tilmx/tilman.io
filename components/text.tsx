import * as React from 'react';
import styled from '@emotion/styled';
import { Breakpoint } from './tokens/breakpoint';

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
}

const StyledText = styled.div<TextProps>`
	font-family: Manrope, -apple-system, -system-ui, BlinkMacSystemFont, sans-serif; 
	font-weight: 600;
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
