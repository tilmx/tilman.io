import * as React from 'react';
import styled from '@emotion/styled';

const StyledLink = styled.a`
	color: inherit;
    text-decoration: inherit;
    transition: color .2s;

    &:hover {
        color: ${props => props.theme.colors.accent};
        text-decoration: underline;
    }
`;

export const ExternalLink: React.FunctionComponent<{ link?: string; children?: React.ReactNode; }> = props => {
    return (
        <StyledLink href={props.link} target="_blank">
            {props.children}
        </StyledLink>
    );
};
