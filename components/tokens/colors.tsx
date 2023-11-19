
import { css, Global } from '@emotion/react';
import React from 'react';

export enum Color {
    Text = 'var(--color-text)',
    Background = 'var(--color-background)',
    Accent = 'var(--color-accent)',
}

export const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = props => {
    return (
        <>
            <Global styles={css`
                :root {
                    --color-text: #000000;
                    --color-background: #FFFFFF;
                    --color-accent: #0C2EF9;

                    @media (prefers-color-scheme: dark) {
                        --color-text: #FFFFFF;
                        --color-background: #000000;
                    }
                }
            `} />
            {props.children}
        </>
    )
}
