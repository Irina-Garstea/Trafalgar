import React, { useEffect, FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/components/theme';
import { EmotionCache } from '@emotion/cache';
import createEmotionCache from '../src/components/theme/createEmotionCache';
import { useApollo } from './../src/utils/Client';
import { CacheProvider } from '@emotion/react';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  // eslint-disable-next-line react/require-default-props
  emotionCache?: EmotionCache;
}

const App: FC<MyAppProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default App;
