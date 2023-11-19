
import { css, Global } from '@emotion/react';
import type { FunctionComponent } from 'react';

export enum Color {
    Text = 'var(--color-text)',
    Background = 'var(--color-background)',
}

export const Theme: FunctionComponent<{ children?: React.ReactNode }> = props => {
    return (
        <>
            <Global styles={css`
                :root {
                    --color-text: #FFFFFF;
                    --color-background: #000000;

                    /*@media (prefers-color-scheme: dark) {
                        --color-text: #000000;
                        --color-background: #FFFFFF;
                    }*/
                }
            `} />
            {props.children}
        </>
    )
}
