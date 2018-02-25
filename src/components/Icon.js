import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Box from './Box'

const Icon = props => {
  const src = `https:icon.now.sh/${props.name}/${
    props.color ? `props.color` : '000000'
  }`
  if (props.url) {
    return (
      <Box width={16} height={16} mx={8}>
        <Link to={props.url}>
          <img src={src} alt={`${props.name} icon`} />
        </Link>
      </Box>
    )
  } else {
    return (
      <Box width={16} height={16} mx={8}>
        <img src={src} alt={`${props.name} icon`} />
      </Box>
    )
  }
}

export default Icon
