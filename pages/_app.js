import App, { Container } from 'next/app'
import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  html {
      box-sizing: border-box;
      font-family: halyard-text, system-ui;
    }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-weight: normal;
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
