import styled from '@emotion/styled';

export const Animation = styled.div< { scale?: number } >`
    transition: transform .2s;
    &:active {
        transform: scale(${props => props.scale || '0.98'});
    }
`;
