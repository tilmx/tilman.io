import * as React from 'react';
import styled from '@emotion/styled'
import { Text } from './text';
import { Size } from './tokens';

interface ButtonProps {
    children?: React.ReactNode;
    textColor?: string;
    link?: string;
}

const StyledWrapper = styled.a`
    display: inline-block;
    background-color: ${props => props.theme.colors.background};
    color: @black;
    text-decoration: none;
    padding: ${Size.S} ${Size.M};
    border-radius: ${Size.XXS};
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <StyledWrapper href={props.link} target='_blank'>
            <Text color={props.textColor} sansserif>
                {props.children}
            </Text>
        </StyledWrapper>
    )
}
