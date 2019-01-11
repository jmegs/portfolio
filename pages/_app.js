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
        <div className={pageClasses}>
          <PageTransition timeout={240} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </Container>
    )
  }
}
