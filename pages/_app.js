import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
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
    const { Component, pageProps, router } = this.props

    // adds each component of the pathname as a class on the page
    const isHome = router.pathname === '/'
    const pageClasses = isHome
      ? 'home'
      : router.pathname
          .split('/')
          .splice(1)
          .join(' ')

    return (
      <Container>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>John Meguerian</title>
          <meta
            name="description"
            content="Product designer and occasional developer in NYC. Currently working at Squarespace. Formerly Experience Design at R/GA."
          />
          <link rel="icon" href="/static/emoji.png" type="image/png" />
        </Head>
        <div className={pageClasses}>
          <PageTransition timeout={240} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </Container>
    )
  }
}
