import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    background: #F5F4F0;
    display:block;
    height: 100%;
    max-width: 640px;
    margin:0 auto;
    padding: 0;
  }

  body{
    background-color:#fafafa;
    min-height:100vh;
    padding: 1rem;
    margin-top:0;
    font-family:Verdana;
  }
`;

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

// Next에서는 title을 별도 분리 처리 합니다.
// _document.js에서 <title></title> 태그를 사용해서는 안됩니다.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Hello Next.js</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
