
import { Theme as ThemeType } from '@emotion/react';
import React from 'react';
import { ThemeProvider } from '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        colors: ThemeColors;
    }
}

export { useTheme } from '@emotion/react';

interface ThemeColors {
    text: string;
    textVariant: string;
    textLight: string;
    background: string;
    backgroundVariant: string;
    accent: string;
}

const colorsLight: ThemeColors = {
    text: '#13141A',
    textVariant: '#13141ACC',
    textLight: '#13141A77',
    background: '#ffffff',
    backgroundVariant: '#F3F5F6',
    accent: '#0C2EF9',
}

const colorsDark: ThemeColors = {
    text: '#ffffff',
    textVariant: 'rgba(255,255,255,0.6)',
    textLight: 'rgba(255,255,255,0.3)',
    background: '#191C20',
    backgroundVariant: '#24292F',
    accent: '#3A4EC6',
}

export const themeLight: ThemeType = { colors: colorsLight };
export const themeDark: ThemeType = { colors: colorsDark };

export const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = props => {
    return (
        <ThemeProvider theme={themeLight}>
            {props.children}
        </ThemeProvider>
    )
}
