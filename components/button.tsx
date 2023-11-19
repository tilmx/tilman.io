
import styled from '@emotion/styled';
import React from 'react';
import { Size } from './tokens/size';
import { Color } from './tokens/colors';
import { Text } from './text';

type ButtonProps = {
    text: string;
    onClick?: () => void;
};

const StyledButton = styled.div`
    display: inline-block;
    padding: ${Size.XS} ${Size.S};
    background: ${Color.Text};
    color: ${Color.Background};
    border-radius: ${Size.XS};
`;

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <Text>{text}</Text>
        </StyledButton>
    );
};

export default Button;
