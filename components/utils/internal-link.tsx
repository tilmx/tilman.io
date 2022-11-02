
import * as React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const StyledLink = styled.span`
	color: inherit;
    text-decoration: inherit;
    transition: color .2s;

    &:hover {
        color: ${props => props.theme.colors.accent};
        text-decoration: underline;
    }
`;

export const InternalLink: React.FunctionComponent<{ link: string; children?: React.ReactNode; }> = props => {
    return (
        <StyledLink>
            <NextLink href={props.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>{props.children}</NextLink>
        </StyledLink>
    );
};
