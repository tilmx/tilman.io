import * as React from 'react';
import styled from '@emotion/styled';

interface TextProps {
    size?: TextSize;
    color?: string;
    center?: boolean;
    children?: React.ReactNode;
}

export enum TextSize {
    Large = '19px',
    Regular = '14px',
    Small = '12px',
}

const StyledText = styled.div<TextProps>`
	font-family: Manrope, -apple-system, -system-ui, BlinkMacSystemFont, sans-serif; 
	font-weight: 600;
    font-size: ${props => props.size};
    line-height: 1.3;
    ${props => props.center && 'text-align: center;'}
    color: ${props => props.color || props.theme.colors.text};
    margin: 0;
	cursor: inherit;
`;

export const Text: React.FunctionComponent<TextProps> = props => {
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    );
};
