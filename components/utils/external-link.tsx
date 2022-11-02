import * as React from 'react';
import styled from '@emotion/styled';
import { Color } from '../tokens/colors';

const StyledLink = styled.a<{ noHighlighting?: boolean }>`
	color: inherit;
    text-decoration: inherit;
    transition: color .2s;

    ${props => !props.noHighlighting && `
        &:hover {
            color: ${Color.Accent};
            text-decoration: underline;
        }
    `}
`;

export const ExternalLink: React.FunctionComponent<{ link?: string; children?: React.ReactNode; noHighlighting?: boolean }> = props => {
    return (
        <StyledLink href={props.link} noHighlighting={props.noHighlighting} target="_blank">
            {props.children}
        </StyledLink>
    );
};
