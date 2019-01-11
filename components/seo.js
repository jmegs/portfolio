import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SEO = ({ title, description }) => {
  return (
    <Head>
      {title && <title>{title} | John Meguerian</title>}
      {description && <meta name="description" content={description} />}
    </Head>
  )
}

export default SEO
