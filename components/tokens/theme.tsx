
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
    background: string;
    backgroundVariant: string;
    accent: string;
}

const colorsLight: ThemeColors = {
    text: '#13141A',
    textVariant: 'rgba(0,0,0,0.6)',
    background: '#ffffff',
    backgroundVariant: '#F3F5F6',
    accent: '#585EE2'
}

const colorsDark: ThemeColors = {
    text: '#ffffff',
    textVariant: 'rgba(255,255,255,0.6)',
    background: '#191C20',
    backgroundVariant: '#24292F',
    accent: '#585EE2'
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
