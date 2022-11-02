
import * as React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const StyledLink = styled.span<{ noHighlighting?: boolean }>`
	color: inherit;
    text-decoration: inherit;
    transition: color .2s;

    ${props => !props.noHighlighting && `
        &:hover {
            color: ${props.theme.colors.accent};
            text-decoration: underline;
        }
    `}
`;

export const InternalLink: React.FunctionComponent<{ link: string; children?: React.ReactNode; noHighlighting?: boolean }> = props => {
    return (
        <StyledLink noHighlighting={props.noHighlighting}>
            <NextLink href={props.link} style={{ color: 'inherit', textDecoration: 'inherit' }}>{props.children}</NextLink>
        </StyledLink>
    );
};
