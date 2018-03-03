import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Frame = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 8px;
`

export default props => {
  const src = `https://icon.now.sh/${props.name}/${
    props.color ? `props.color` : '000000'
    }`

  return (
    <Frame>
      <img src={src} alt={`${props.name} icon`} />
    </Frame>
  )
}
