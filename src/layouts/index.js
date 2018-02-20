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
    font-weight: normal;
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

  body {
    background: #f9f9f9;
    transition: width 0.15s, height 0.15s, margin 0.15s padding 0.15s;
    min-height: 100vh;
    min-width: 100vw;
    @media (min-width: 1280px) {
      justify-content: center;
        align-items: center;
        display: flex;
    }
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
          {/* @TODO Favicons */}
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
