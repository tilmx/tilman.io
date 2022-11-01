import * as React from 'react';
import styled from '@emotion/styled'
import { Text } from './text';

interface ButtonProps {
    children?: React.ReactNode;
    textColor?: string;
}

const StyledWrapper = styled.div`
    display: inline-block;
    background-color: ${props => props.theme.colors.background};
    color: @black;
    text-decoration: none;
    padding: 12px 25px 15px;
    border-radius: 5px;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.9;
    }
`

export const Button: React.FunctionComponent<ButtonProps> = props => {
    return (
        <StyledWrapper>
            <Text color={props.textColor}>
                {props.children}
            </Text>
        </StyledWrapper>
    )
}
