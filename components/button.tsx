
import styled from '@emotion/styled';
import { Size } from './tokens/size';
import { Color } from './tokens/colors';
import { Text } from './text';
import { FunctionComponent } from 'react';

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

export const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        <StyledButton onClick={props.onClick}>
            <Text>{props.text}</Text>
        </StyledButton>
    );
};
