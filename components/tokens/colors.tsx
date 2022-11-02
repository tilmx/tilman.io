
import { css, Global } from '@emotion/react';
import React from 'react';

export enum Color {
    Text = 'var(--color-text)',
    TextVariant = 'var(--color-textVariant)',
    TextLight = 'var(--color-textLight)',
    Background = 'var(--color-background)',
    BackgroundVariant = 'var(--color-backgroundVariant)',
    Accent = 'var(--color-accent)',
}

export const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = props => {
    return (
        <>
            <Global styles={css`
                :root {
                    --color-text: #13141A;
                    --color-textVariant: #13141ACC;
                    --color-textLight: #13141A77;
                    --color-background: #FFFFFF;
                    --color-backgroundVariant: #13141A11;
                    --color-accent: #0C2EF9;

                    @media (prefers-color-scheme: dark) {
                        --color-text: #FFFFFF;
                        --color-textVariant: #FFFFFFCC;
                        --color-textLight: #FFFFFF77;
                        --color-background: #13141A;
                        --color-backgroundVariant: #FFFFFF11;
                    }
                }
            `} />
            {props.children}
        </>
    )
}
