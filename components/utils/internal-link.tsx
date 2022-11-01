
import * as React from 'react';
import NextLink from 'next/link';

export const InternalLink: React.FunctionComponent<{ link: string; children?: React.ReactNode; }> = props => {
    return (
        <NextLink href={props.link} style={{ color: 'inherit', textDecoration: 'none' }}>{props.children}</NextLink>
    );
};
