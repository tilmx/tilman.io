import * as React from 'react';
import styled from '@emotion/styled'
import { Text } from './text';
import { Color, Size } from './tokens';

interface ButtonProps {
    children?: React.ReactNode;
    textColor?: string;
    link?: string;
}

const StyledButton = styled.a<{ textColor?: string }>`
    display: inline-block;
    background-color: ${Color.Background};
    color: ${props => props.textColor};
    text-decoration: none;
    padding: ${Size.S} ${Size.L};
    border-radius: ${Size.XXS};
    transition: background-color .2s, transform .2s, color .2s;

    &:hover {
        background-color: ${Color.TextVariant};
        color: ${Color.Background};
        transform: scale(1.05);
    } 
`

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <StyledButton href={props.link} target='_blank' textColor={props.textColor}>
            <Text color="inherit" sansserif>
                {props.children}
            </Text>
        </StyledButton>
    )
}
