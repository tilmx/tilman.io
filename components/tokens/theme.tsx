
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
}

const colorsLight: ThemeColors = {
    text: '#24292F',
    textVariant: 'rgba(36,41,47,0.6)',
    background: '#ffffff',
    backgroundVariant: '#F3F5F6',
}

const colorsDark: ThemeColors = {
    text: '#ffffff',
    textVariant: 'rgba(255,255,255,0.6)',
    background: '#191C20',
    backgroundVariant: '#24292F',
}

export const themeLight: ThemeType = { colors: colorsLight };
export const themeDark: ThemeType = { colors: colorsDark };

export const Theme: React.FunctionComponent<{ children?: React.ReactNode }> = props => {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <ThemeProvider theme={darkMode ? themeDark : themeLight}>
            {props.children}
        </ThemeProvider>
    )
}
