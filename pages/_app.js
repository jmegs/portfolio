import App, { Container } from 'next/app'
import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`

  @font-face {
    font-family: atto;
    src: url('/static/fonts/atto.woff2') format('woff2'),
         url('/static/fonts/atto.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }

  @font-face {
      font-family: atto;
      src: url('/static/fonts/atto_bold.woff2') format('woff2'),
          url('/static/fonts/atto_bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;

  }
  
  html {
      box-sizing: border-box;
      font-family: atto, system-ui;
    }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    min-height: 100vh;
    border: 8px solid #0d0d0d;
    border-image: linear-gradient(0deg, #F2C94C 5.52%, #EB5757 40.33%, #2F80ED 96.13%) 8;
  }
  
  ul,
  ol {
    list-style: none;
  }
  img {
    width: 100%;
    height: auto;
  }
`

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
