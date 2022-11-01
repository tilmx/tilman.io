import { css, Global } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Theme } from '../components/tokens/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
        <meta name="language" content="en" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <Global styles={css`body { margin: 0 };`} />
      <Component {...pageProps} />
    </Theme>
  );
}

export default App;
