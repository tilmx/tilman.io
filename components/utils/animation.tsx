import styled from '@emotion/styled';

export const Animation = styled.div< { indicateHover?: boolean } >`
    transition: transform .2s;
    
    ${props => props.indicateHover && `
        &:hover {
            transform: scale(1.02);
        }
    `}

    &:active {
        transform: scale(0.98);
    }
`;
