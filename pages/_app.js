import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'

import '../styles/style.css'

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
        <PageTransition timeout={400} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    )
  }
}
