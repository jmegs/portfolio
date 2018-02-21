import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Box from './Box'

const Icon = props => {
  if (props.url) {
    return (
      <Box width={16} height={16} mx={8}>
        <Link to={props.url}>
          <img
            src={`https:icon.now.sh/${props.name}`}
            alt={`${props.name} icon`}
          />
        </Link>
      </Box>
    )
  } else {
    return (
      <Box width={16} height={16} mx={8}>
        <img
          src={`https:icon.now.sh/${props.name}`}
          alt={`${props.name} icon`}
        />
      </Box>
    )
  }
}

export default Icon
