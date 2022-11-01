import * as React from 'react';
import styled from '@emotion/styled'
import { Size } from './tokens';

const StyledWrapper = styled.div`
    max-width: ${Size.XXXXL};
    margin: 0 auto;
`

export const Wrapper: React.FunctionComponent<{ children: React.ReactNode }> = props => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}
