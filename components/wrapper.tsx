import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens/size';

const StyledWrapper = styled.div`
    padding: 0 ${Size.L};
    margin: 0 auto;
`

export const Wrapper: React.FunctionComponent<{ children: React.ReactNode }> = props => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}
