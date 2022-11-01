import { css, Global } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Size, Space, Theme, Wrapper } from '../components';
import { Footer } from '../container/footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
        <meta name="language" content="en" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <Global
        styles={css`
          body { margin: 0; user-select: none };
          @font-face {
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            src: local(''),
              url('../fonts/manrope-v13-latin-600.woff2') format('woff2'),
              url('../fonts/manrope-v13-latin-600.woff') format('woff');
          }
        `}
      />
      <Wrapper>
        <Space vertical={Size.XXL} />
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </Theme>
  );
}

export default App;
