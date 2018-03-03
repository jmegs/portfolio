import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from '../theme'
import fonts from '../fonts/fonts.css'

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    transition: inherit;
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    width: 100%;
    height: auto;
  }

   a {
    text-decoration: none;
    color: inherit;
  }

  iframe {
    border-width: 0;
    border-style: none;
    border-color: initial;
    border-image: initial;
  }

  body {
    transition: width 0.15s, height 0.15s, margin 0.15s padding 0.15s;
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
    font-family: ${theme.font};
  }
`

const TemplateWrapper = ({
  children,
  data: { site: { siteMetadata: { title, description, siteUrl } } },
}) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* @TODO Social Graph tags */}
          <link
            rel="icon"
            type="image/png"
            href="favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="favicon-16x16.png"
            sizes="16x16"
          />
        </Helmet>
        {children()}
      </div>
    </ThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
