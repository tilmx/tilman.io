
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

/*const colorsDark: ThemeColors = {
    text: '#ffffff',
    textVariant: 'rgba(255,255,255,0.6)',
    textLight: 'rgba(255,255,255,0.3)',
    background: '#191C20',
    backgroundVariant: '#24292F',
    accent: '#3A4EC6',
}*/

export const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = props => {
    return (
        <>
            <Global styles={css`:root {
                --color-text: #13141A;
                --color-textVariant: #13141ACC;
                --color-textLight: #13141A77;
                --color-background: #ffffff;
                --color-backgroundVariant: #F3F5F6;
                --color-accent: #0C2EF9;
            }`} />
            {props.children}
        </>
    )
}
